export interface PremblyModuleOptions {
  /**
   * Prembly API key sent as x-api-key.
   */
  apiKey: string;

  /**
   * Prembly app ID sent as app-id.
   */
  appId: string;

  /**
   * Prembly API base URL.
   * @default 'https://api.prembly.com'
   */
  baseUrl?: string;

  /**
   * Request timeout in milliseconds.
   * @default 30000
   */
  timeout?: number;

  /**
   * Number of retry attempts for failed requests.
   * @default 3
   */
  retries?: number;

  /**
   * Initial delay between retries in milliseconds.
   * @default 1000
   */
  retryDelay?: number;

  /**
   * Maximum delay between retries in milliseconds.
   * @default 10000
   */
  maxRetryDelay?: number;
}

export interface PremblyModuleAsyncOptions {
  imports?: any[];
  useFactory?: (...args: any[]) => Promise<PremblyModuleOptions> | PremblyModuleOptions;
  inject?: any[];
}
