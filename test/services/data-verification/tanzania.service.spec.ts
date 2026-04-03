import { TanzaniaDataVerificationService } from '../../../src/services/data-verification/tanzania.service';

describe('TanzaniaDataVerificationService', () => {
  let service: TanzaniaDataVerificationService;

  beforeEach(() => {
    service = new TanzaniaDataVerificationService({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('businessCheck', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessCheck({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tz/business-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneNumberBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tz/phone-number-check', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('taxIdentificationNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.taxIdentificationNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tz/id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('votersIdentificationNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.votersIdentificationNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tz/id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('zanzibarResidenceId', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.zanzibarResidenceId({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tz/id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
