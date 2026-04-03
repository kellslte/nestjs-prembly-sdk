import { MalawiDataVerificationService } from '../../../src/services/data-verification/malawi.service';

describe('MalawiDataVerificationService', () => {
  let service: MalawiDataVerificationService;

  beforeEach(() => {
    service = new MalawiDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('tinTaxIdentificationNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tinTaxIdentificationNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/mw_tin', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/mw_phone', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessVerificationPlusUbo', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessVerificationPlusUbo({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/business/ubo', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
