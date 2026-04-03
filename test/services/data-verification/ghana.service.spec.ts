import { GhanaDataVerificationService } from '../../../src/services/data-verification/ghana.service';

describe('GhanaDataVerificationService', () => {
  let service: GhanaDataVerificationService;

  beforeEach(() => {
    service = new GhanaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('driversLicense', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicense({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/gh/drivers_license', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('meterNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.meterNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/gh/meter-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('meterPaymentHistory', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.meterPaymentHistory({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/gh/meter-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nationalPassport', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalPassport({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/identitypass/verification/gh/voters', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('phoneNumberBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.phoneNumberBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/legacy/ghana/phone', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('taxIdentificationNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.taxIdentificationNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/gh_tin/', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('waecVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.waecVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/waec', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessPlusUbo', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessPlusUbo({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/legacy/ghana/business', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
