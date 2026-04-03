import {
  DEFAULT_MAX_RETRY_DELAY,
  DEFAULT_RETRIES,
  DEFAULT_RETRY_DELAY,
  PREMBLY_API_BASE_URL,
} from './constants';
import { HttpClient } from './http-client';
import { PremblyModuleOptions, PremblyQueryParams, RetryOptions } from './interfaces';

export abstract class BaseService {
  protected readonly httpClient: HttpClient;
  protected readonly options: PremblyModuleOptions;

  constructor(options: PremblyModuleOptions) {
    this.options = options;
    this.httpClient = new HttpClient();
  }

  protected getBaseUrl(): string {
    return this.options.baseUrl || PREMBLY_API_BASE_URL;
  }

  protected getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'x-api-key': this.options.apiKey,
      'Content-Type': 'application/json',
    };

    if (this.options.appId) {
      headers['app-id'] = this.options.appId;
    }

    return headers;
  }

  protected getRetryOptions(): RetryOptions {
    return {
      retries: this.options.retries ?? DEFAULT_RETRIES,
      retryDelay: this.options.retryDelay ?? DEFAULT_RETRY_DELAY,
      maxRetryDelay: this.options.maxRetryDelay ?? DEFAULT_MAX_RETRY_DELAY,
    };
  }

  protected async get<T>(endpoint: string, params?: PremblyQueryParams): Promise<T> {
    const url = this.buildUrl(endpoint, params);
    const response = await this.httpClient.request<T>(
      {
        method: 'GET',
        url,
        headers: this.getHeaders(),
        timeout: this.options.timeout,
      },
      this.getRetryOptions(),
    );
    return response.data;
  }

  protected async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.sendWithBody<T>('POST', endpoint, data);
  }

  protected async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.sendWithBody<T>('PUT', endpoint, data);
  }

  protected async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.sendWithBody<T>('PATCH', endpoint, data);
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    const response = await this.httpClient.request<T>(
      {
        method: 'DELETE',
        url: this.buildUrl(endpoint),
        headers: this.getHeaders(),
        timeout: this.options.timeout,
      },
      this.getRetryOptions(),
    );
    return response.data;
  }

  private async sendWithBody<T>(method: 'POST' | 'PUT' | 'PATCH', endpoint: string, data?: any) {
    const response = await this.httpClient.request<T>(
      {
        method,
        url: this.buildUrl(endpoint),
        headers: this.getHeaders(),
        body: data,
        timeout: this.options.timeout,
      },
      this.getRetryOptions(),
    );
    return response.data;
  }

  private buildUrl(endpoint: string, params?: PremblyQueryParams): string {
    const url = endpoint.startsWith('http')
      ? new URL(endpoint)
      : new URL(endpoint, `${this.getBaseUrl()}/`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }
}
