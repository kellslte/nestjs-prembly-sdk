import { UnitedStatesOfAmericaDataVerificationService } from '../../../src/services/data-verification/united-states-of-america.service';

describe('UnitedStatesOfAmericaDataVerificationService', () => {
  let service: UnitedStatesOfAmericaDataVerificationService;

  beforeEach(() => {
    service = new UnitedStatesOfAmericaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
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
