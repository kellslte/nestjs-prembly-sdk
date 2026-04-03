import { BrazilDataVerificationService } from '../../../src/services/data-verification/brazil.service';

describe('BrazilDataVerificationService', () => {
  let service: BrazilDataVerificationService;

  beforeEach(() => {
    service = new BrazilDataVerificationService({
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
