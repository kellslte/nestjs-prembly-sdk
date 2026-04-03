import { CzechRepublicDataVerificationService } from '../../../src/services/data-verification/czech-republic.service';

describe('CzechRepublicDataVerificationService', () => {
  let service: CzechRepublicDataVerificationService;

  beforeEach(() => {
    service = new CzechRepublicDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('companySearchBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.companySearchBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/czech/business-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
