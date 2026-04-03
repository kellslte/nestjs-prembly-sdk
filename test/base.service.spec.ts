import { BaseService } from '../src/base.service';
import { HttpClient } from '../src/http-client';

class TestService extends BaseService {
  async testGet(endpoint: string, params?: Record<string, any>) {
    return this.get(endpoint, params);
  }

  async testPost(endpoint: string, data?: any) {
    return this.post(endpoint, data);
  }

  async testPut(endpoint: string, data?: any) {
    return this.put(endpoint, data);
  }

  async testPatch(endpoint: string, data?: any) {
    return this.patch(endpoint, data);
  }

  async testDelete(endpoint: string) {
    return this.delete(endpoint);
  }
}

jest.mock('../src/http-client');

describe('BaseService', () => {
  let service: TestService;
  let mockHttpClient: jest.Mocked<HttpClient>;

  beforeEach(() => {
    jest.clearAllMocks();

    service = new TestService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
      maxRetryDelay: 10000,
    });

    mockHttpClient = service['httpClient'] as jest.Mocked<HttpClient>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should set Prembly auth headers', () => {
    expect(service['getHeaders']()).toEqual({
      'x-api-key': 'test-api-key',
      'app-id': 'test-app-id',
      'Content-Type': 'application/json',
    });
  });

  it('should build a GET request with query params', async () => {
    mockHttpClient.request.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: { status: true },
    });

    const result = await service.testGet('/verification/test', { id: 'abc', page: 2 });

    expect(mockHttpClient.request).toHaveBeenCalledWith(
      {
        method: 'GET',
        url: 'https://api.prembly.com/verification/test?id=abc&page=2',
        headers: {
          'x-api-key': 'test-api-key',
          'app-id': 'test-app-id',
          'Content-Type': 'application/json',
        },
        timeout: 30000,
      },
      {
        retries: 3,
        retryDelay: 1000,
        maxRetryDelay: 10000,
      },
    );
    expect(result).toEqual({ status: true });
  });

  it('should build a POST request', async () => {
    mockHttpClient.request.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: { status: true },
    });

    const payload = { sample: true };
    await service.testPost('/verification/test', payload);

    expect(mockHttpClient.request).toHaveBeenCalledWith(
      expect.objectContaining({
        method: 'POST',
        url: 'https://api.prembly.com/verification/test',
        body: payload,
      }),
      expect.any(Object),
    );
  });

  it('should build a PATCH request', async () => {
    mockHttpClient.request.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: { status: true },
    });

    const payload = { sample: true };
    await service.testPatch('/verification/test', payload);

    expect(mockHttpClient.request).toHaveBeenCalledWith(
      expect.objectContaining({
        method: 'PATCH',
        url: 'https://api.prembly.com/verification/test',
        body: payload,
      }),
      expect.any(Object),
    );
  });
});
