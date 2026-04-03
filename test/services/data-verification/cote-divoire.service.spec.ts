import { CoteDivoireDataVerificationService } from '../../../src/services/data-verification/cote-divoire.service';

describe('CoteDivoireDataVerificationService', () => {
  let service: CoteDivoireDataVerificationService;

  beforeEach(() => {
    service = new CoteDivoireDataVerificationService({
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

      expect(service['post']).toHaveBeenCalledWith('/verification/ivory-coast/company-search', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nationalIdentityNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalIdentityNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ivory-coast/id-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('residentIdentityNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.residentIdentityNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ivory-coast/resident-card-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
