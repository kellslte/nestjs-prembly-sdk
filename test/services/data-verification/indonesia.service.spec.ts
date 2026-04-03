import { IndonesiaDataVerificationService } from '../../../src/services/data-verification/indonesia.service';

describe('IndonesiaDataVerificationService', () => {
  let service: IndonesiaDataVerificationService;

  beforeEach(() => {
    service = new IndonesiaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('phoneNumberBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/indonesia/phone-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
