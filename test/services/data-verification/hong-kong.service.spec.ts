import { HongKongDataVerificationService } from '../../../src/services/data-verification/hong-kong.service';

describe('HongKongDataVerificationService', () => {
  let service: HongKongDataVerificationService;

  beforeEach(() => {
    service = new HongKongDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('businessSearch', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessSearch({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/search', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessSearchAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessSearchAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/search/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('companySearchAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.companySearchAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/search-lite', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getCompanyNumberHongKong', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.getCompanyNumberHongKong({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/get-company-number', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
