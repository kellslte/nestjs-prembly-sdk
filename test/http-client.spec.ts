import { HttpClient } from '../src/http-client';
import { PremblyError } from '../src/errors/prembly.error';

global.fetch = jest.fn();
global.AbortController = jest.fn().mockImplementation(() => ({
  signal: 'test-signal',
  abort: jest.fn(),
}));

describe('HttpClient', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new HttpClient();
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return a parsed JSON response', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: new Map([['content-type', 'application/json']]),
      json: jest.fn().mockResolvedValue({ status: true }),
    });

    const result = await httpClient.request(
      {
        method: 'GET',
        url: 'https://api.prembly.com/test',
      },
      {
        retries: 1,
        retryDelay: 1000,
        maxRetryDelay: 3000,
      },
    );

    expect(result.data).toEqual({ status: true });
  });

  it('should wrap Prembly style API errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests',
      headers: new Map([['content-type', 'application/json']]),
      json: jest.fn().mockResolvedValue({ detail: 'Rate limit exceeded' }),
    });

    await expect(
      httpClient.request(
        {
          method: 'GET',
          url: 'https://api.prembly.com/test',
        },
        {
          retries: 0,
          retryDelay: 1000,
          maxRetryDelay: 3000,
        },
      ),
    ).rejects.toThrow(PremblyError);
  });

  it('should retry when the status is retryable', async () => {
    jest.useRealTimers();

    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: false,
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Map([['content-type', 'application/json']]),
        json: jest.fn().mockResolvedValue({ detail: 'temporary' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Map([['content-type', 'application/json']]),
        json: jest.fn().mockResolvedValue({ status: true }),
      });

    const promise = httpClient.request(
      {
        method: 'GET',
        url: 'https://api.prembly.com/test',
      },
      {
        retries: 1,
        retryDelay: 1000,
        maxRetryDelay: 3000,
      },
    );
    const result = await promise;

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(result.data).toEqual({ status: true });
  }, 10000);
});
