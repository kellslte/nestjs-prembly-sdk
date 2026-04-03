import { Injectable } from '@nestjs/common';
import { PremblyError } from './errors/prembly.error';
import { HttpError, HttpRequestOptions, HttpResponse, RetryOptions } from './interfaces';
import {
  DEFAULT_MAX_RETRY_DELAY,
  DEFAULT_RETRIES,
  DEFAULT_RETRY_DELAY,
  DEFAULT_TIMEOUT,
  RETRYABLE_ERROR_MESSAGES,
  RETRYABLE_STATUS_CODES,
} from './constants';

@Injectable()
export class HttpClient {
  async request<T = any>(
    options: HttpRequestOptions,
    retryOptions: RetryOptions,
  ): Promise<HttpResponse<T>> {
    let lastError: HttpError | undefined;

    for (let attempt = 0; attempt <= retryOptions.retries; attempt++) {
      try {
        return await this.makeRequest<T>(options);
      } catch (error) {
        lastError = this.createHttpError(error);

        if (attempt === retryOptions.retries || !this.shouldRetry(lastError, retryOptions)) {
          break;
        }

        const delay = this.calculateRetryDelay(attempt, retryOptions);
        await this.sleep(delay);
      }
    }

    throw new PremblyError(
      lastError?.message || 'HTTP request failed',
      lastError?.status || 0,
      'HTTP_REQUEST_FAILED',
      lastError?.data,
    );
  }

  private async makeRequest<T>(options: HttpRequestOptions): Promise<HttpResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || DEFAULT_TIMEOUT);

    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseData = await this.parseResponse<T>(response);

      if (!response.ok) {
        throw new PremblyError(
          (responseData as any)?.message || (responseData as any)?.detail || `HTTP ${response.status}`,
          response.status,
          this.getErrorCode(response.status),
          responseData,
        );
      }

      return {
        status: response.status,
        statusText: response.statusText,
        headers: this.parseHeaders(response.headers),
        data: responseData,
      };
    } catch (error: any) {
      clearTimeout(timeoutId);

      if (error instanceof PremblyError) {
        throw error;
      }

      if (error?.name === 'AbortError') {
        throw new PremblyError('Request timeout', 408, 'TIMEOUT');
      }

      throw new PremblyError(error?.message || 'Network error', 0, 'NETWORK_ERROR', error);
    }
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      try {
        return (await response.json()) as T;
      } catch {
        return {} as T;
      }
    }

    if (contentType?.includes('text/')) {
      return (await response.text()) as T;
    }

    return {} as T;
  }

  private parseHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  private createHttpError(error: any): HttpError {
    if (error instanceof PremblyError) {
      return {
        status: error.status,
        statusText: error.code,
        message: error.message,
        data: error.data,
      };
    }

    return {
      status: 0,
      statusText: 'UNKNOWN',
      message: error?.message || 'Unknown error',
      data: error,
    };
  }

  private shouldRetry(error: HttpError, retryOptions: RetryOptions): boolean {
    if (retryOptions.shouldRetry) {
      return retryOptions.shouldRetry(error);
    }

    const isRetryableStatus = RETRYABLE_STATUS_CODES.includes(error.status);
    const message = error.message.toLowerCase();
    const isRetryableMessage = RETRYABLE_ERROR_MESSAGES.some((item) => message.includes(item));

    return isRetryableStatus || isRetryableMessage;
  }

  private calculateRetryDelay(attempt: number, retryOptions: RetryOptions): number {
    const baseDelay = retryOptions.retryDelay || DEFAULT_RETRY_DELAY;
    const maxDelay = retryOptions.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
    return Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private getErrorCode(status: number): string {
    return PremblyError.fromHttpError(status, '').code;
  }
}
