import { SierraLeoneDataVerificationService } from '../../../src/services/data-verification/sierra-leone.service';

describe('SierraLeoneDataVerificationService', () => {
  let service: SierraLeoneDataVerificationService;

  beforeEach(() => {
    service = new SierraLeoneDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('driversLicense', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicense({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/sierraleone/drivers-license', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nationalId', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalId({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/sl/national-id-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('waecVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.waecVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/waec', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
