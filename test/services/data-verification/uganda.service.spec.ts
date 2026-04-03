import { UgandaDataVerificationService } from '../../../src/services/data-verification/uganda.service';

describe('UgandaDataVerificationService', () => {
  let service: UgandaDataVerificationService;

  beforeEach(() => {
    service = new UgandaDataVerificationService({
      apiKey: 'test-api-key',
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

      expect(service['post']).toHaveBeenCalledWith('/verification/sim/sim-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
