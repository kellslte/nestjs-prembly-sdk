import { ZimbabweDataVerificationService } from '../../../src/services/data-verification/zimbabwe.service';

describe('ZimbabweDataVerificationService', () => {
  let service: ZimbabweDataVerificationService;

  beforeEach(() => {
    service = new ZimbabweDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('tinVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tinVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/api/zw_tin/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/api/zw_phone/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessVerificationPlusUbo', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessVerificationPlusUbo({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/api/zw_business/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
