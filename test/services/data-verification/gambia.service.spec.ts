import { GambiaDataVerificationService } from '../../../src/services/data-verification/gambia.service';

describe('GambiaDataVerificationService', () => {
  let service: GambiaDataVerificationService;

  beforeEach(() => {
    service = new GambiaDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
