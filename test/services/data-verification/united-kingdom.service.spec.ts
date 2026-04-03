import { UnitedKingdomDataVerificationService } from '../../../src/services/data-verification/united-kingdom.service';

describe('UnitedKingdomDataVerificationService', () => {
  let service: UnitedKingdomDataVerificationService;

  beforeEach(() => {
    service = new UnitedKingdomDataVerificationService({
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

      expect(service['post']).toHaveBeenCalledWith('/verification/uk/business-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
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

  describe('phoneNumberBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/uk/phone-intelligence-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
