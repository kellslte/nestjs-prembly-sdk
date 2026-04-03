import { MalaysiaDataVerificationService } from '../../../src/services/data-verification/malaysia.service';

describe('MalaysiaDataVerificationService', () => {
  let service: MalaysiaDataVerificationService;

  beforeEach(() => {
    service = new MalaysiaDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('creditBureauBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditBureauBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyc/credit-bureau/basic', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
