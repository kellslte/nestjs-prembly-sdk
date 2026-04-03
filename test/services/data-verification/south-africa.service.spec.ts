import { SouthAfricaDataVerificationService } from '../../../src/services/data-verification/south-africa.service';

describe('SouthAfricaDataVerificationService', () => {
  let service: SouthAfricaDataVerificationService;

  beforeEach(() => {
    service = new SouthAfricaDataVerificationService({
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
