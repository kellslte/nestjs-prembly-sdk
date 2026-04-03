import { CanadaDataVerificationService } from '../../../src/services/data-verification/canada.service';

describe('CanadaDataVerificationService', () => {
  let service: CanadaDataVerificationService;

  beforeEach(() => {
    service = new CanadaDataVerificationService({
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

      expect(service['post']).toHaveBeenCalledWith('/verification/canada/company-search', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
