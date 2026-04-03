import { ZambiaDataVerificationService } from '../../../src/services/data-verification/zambia.service';

describe('ZambiaDataVerificationService', () => {
  let service: ZambiaDataVerificationService;

  beforeEach(() => {
    service = new ZambiaDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('nationalId', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalId({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/gb/id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/legacy/zambia/phone', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('tinVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tinVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/zm_tin/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
