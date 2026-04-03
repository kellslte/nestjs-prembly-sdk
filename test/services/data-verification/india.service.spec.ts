import { IndiaDataVerificationService } from '../../../src/services/data-verification/india.service';

describe('IndiaDataVerificationService', () => {
  let service: IndiaDataVerificationService;

  beforeEach(() => {
    service = new IndiaDataVerificationService({
      apiKey: 'test-api-key',
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

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/search-advance', { sample: true });
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

  describe('getCompanyNumberIndia', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.getCompanyNumberIndia({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/asia/kyb/get-company-number', { sample: true });
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

});
