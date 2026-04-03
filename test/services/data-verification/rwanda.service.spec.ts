import { RwandaDataVerificationService } from '../../../src/services/data-verification/rwanda.service';

describe('RwandaDataVerificationService', () => {
  let service: RwandaDataVerificationService;

  beforeEach(() => {
    service = new RwandaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('tin', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tin({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/rw_tin/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/rw_phone', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessPlusUboVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessPlusUboVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/rw_business', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
