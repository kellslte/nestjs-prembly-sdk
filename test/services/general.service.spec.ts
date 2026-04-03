import { GeneralService } from '../../src/services/general.service';

describe('GeneralService', () => {
  let service: GeneralService;

  beforeEach(() => {
    service = new GeneralService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should call the correct endpoints', async () => {
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.getWalletBalance();
    await service.getVerificationStatus('abc123', { verbose: true });
    await service.verifyVinOrChassis({ vin: '123' });
    await service.getSdkSession({ page: 1 });

    expect(service['get']).toHaveBeenNthCalledWith(1, '/api/v1/wallet', undefined);
    expect(service['get']).toHaveBeenNthCalledWith(2, '/verification/abc123/status', { verbose: true });
    expect(service['post']).toHaveBeenCalledWith('/verification/vehicle/vin', { vin: '123' });
    expect(service['get']).toHaveBeenNthCalledWith(3, '/api/v1/checker-widget/sdk/sessions/', { page: 1 });
  });
});
