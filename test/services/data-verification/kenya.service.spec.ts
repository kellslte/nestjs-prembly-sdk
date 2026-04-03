import { KenyaDataVerificationService } from '../../../src/services/data-verification/kenya.service';

describe('KenyaDataVerificationService', () => {
  let service: KenyaDataVerificationService;

  beforeEach(() => {
    service = new KenyaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('alienId', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.alienId({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/alien_id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('bankAccount', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.bankAccount({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/identitypass/verification/bank_account_kenya', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditReferenceBureauAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditReferenceBureauAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/crb/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditReferenceBureauBusiness', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditReferenceBureauBusiness({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/crb/business', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditReferenceBureau', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditReferenceBureau({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/crb', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('driversLicense', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicense({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/drivers_license', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('kenyaBusinessVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.kenyaBusinessVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/brs/search/advanced', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('mPesaStatementAnalysis', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.mPesaStatementAnalysis({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/mpesa/statement_analysis', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nationalIdAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalIdAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/national_id', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nationalPassport', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nationalPassport({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/passport', { sample: true });
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

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/phone-number-verification', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('pinChecker', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.pinChecker({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/tax/pin', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('psvLicense', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.psvLicense({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/psv_license', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('serialNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.serialNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/serial', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('tccChecker', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tccChecker({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/tax/tcc', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('whtChecker', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.whtChecker({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ke/wht', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
