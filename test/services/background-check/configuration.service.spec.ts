import { ConfigurationBackgroundCheckService } from '../../../src/services/background-check/configuration.service';

describe('ConfigurationBackgroundCheckService', () => {
  it('should map configuration and lookup endpoints', async () => {
    const service = new ConfigurationBackgroundCheckService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);

    await service.listCountries({ page: 1 });
    await service.listCheckTypesByCountry('NG');
    await service.listAllCheckTypes({ search: 'id' });

    expect(service['get']).toHaveBeenNthCalledWith(1, '/api/v1/api/bgc/countries/', { page: 1 });
    expect(service['get']).toHaveBeenNthCalledWith(
      2,
      '/api/v1/api/bgc/country/check-types/?country_code=NG',
      undefined,
    );
    expect(service['get']).toHaveBeenNthCalledWith(3, '/api/v1/api/bgc/check-types/', {
      search: 'id',
    });
  });
});
