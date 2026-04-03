import { MexicoDataVerificationService } from '../../../src/services/data-verification/mexico.service';

describe('MexicoDataVerificationService', () => {
  let service: MexicoDataVerificationService;

  beforeEach(() => {
    service = new MexicoDataVerificationService({
      apiKey: 'test-api-key',
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

      expect(service['post']).toHaveBeenCalledWith('/verification/mexico/busness-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
