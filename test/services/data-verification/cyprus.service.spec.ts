import { CyprusDataVerificationService } from '../../../src/services/data-verification/cyprus.service';

describe('CyprusDataVerificationService', () => {
  let service: CyprusDataVerificationService;

  beforeEach(() => {
    service = new CyprusDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('phoneNumberAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/global/phone-status-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
