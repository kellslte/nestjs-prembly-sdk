import { GreeceDataVerificationService } from '../../../src/services/data-verification/greece.service';

describe('GreeceDataVerificationService', () => {
  let service: GreeceDataVerificationService;

  beforeEach(() => {
    service = new GreeceDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('basicCompanySearch', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.basicCompanySearch({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/greece/busness-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
