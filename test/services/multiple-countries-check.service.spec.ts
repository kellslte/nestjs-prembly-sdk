import { MultipleCountriesCheckService } from '../../src/services/multiple-countries-check.service';

describe('MultipleCountriesCheckService', () => {
  it('should map the multi-country endpoints', async () => {
    const service = new MultipleCountriesCheckService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.verifyTaxIdentificationNumber({ tin: '123' });
    await service.geoLocate({ address: 'Lagos' });

    expect(service['post']).toHaveBeenNthCalledWith(1, '/verification/global/tin-check', {
      tin: '123',
    });
    expect(service['post']).toHaveBeenNthCalledWith(
      2,
      '/verification/address/geolocation/verification',
      { address: 'Lagos' },
    );
  });
});
