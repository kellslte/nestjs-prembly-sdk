export class PremblyError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly data: any;

  constructor(message: string, status: number, code: string, data?: any) {
    super(message);
    this.name = 'PremblyError';
    this.status = status;
    this.code = code;
    this.data = data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PremblyError);
    }
  }

  static fromResponse(response: any): PremblyError {
    const message = response?.message || response?.detail || 'Prembly API error';
    const status = response?.status || 500;
    const code = response?.code || response?.response_code || 'UNKNOWN_ERROR';
    const data = response?.data || response;

    return new PremblyError(message, status, code, data);
  }

  static fromHttpError(status: number, message: string, data?: any): PremblyError {
    return new PremblyError(message, status, this.getErrorCode(status), data);
  }

  private static getErrorCode(status: number): string {
    switch (status) {
      case 400:
        return 'BAD_REQUEST';
      case 401:
        return 'UNAUTHORIZED';
      case 403:
        return 'FORBIDDEN';
      case 404:
        return 'NOT_FOUND';
      case 409:
        return 'CONFLICT';
      case 422:
        return 'VALIDATION_ERROR';
      case 429:
        return 'RATE_LIMIT_EXCEEDED';
      case 500:
        return 'INTERNAL_SERVER_ERROR';
      case 502:
        return 'BAD_GATEWAY';
      case 503:
        return 'SERVICE_UNAVAILABLE';
      case 504:
        return 'GATEWAY_TIMEOUT';
      default:
        return 'UNKNOWN_ERROR';
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      data: this.data,
      stack: this.stack,
    };
  }
}
