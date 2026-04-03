import { NigeriaDataVerificationService } from '../../../src/services/data-verification/nigeria.service';

describe('NigeriaDataVerificationService', () => {
  let service: NigeriaDataVerificationService;

  beforeEach(() => {
    service = new NigeriaDataVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('accountWithNameComparism', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.accountWithNameComparism({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bank_account/comparism', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('addressVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.addressVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/address', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('addressVerificationStatus', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.addressVerificationStatus({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/address/status', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('advanceCac', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.advanceCac({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/cac/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('advanceDriversLicense', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.advanceDriversLicense({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/drivers_license/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('advancePhoneNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.advancePhoneNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/phone_number/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('bankAccountBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.bankAccountBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bank_account/basic', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('basicCac', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.basicCac({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/cac', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('basicPhoneNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.basicPhoneNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/phone_number', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('businessAddressVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.businessAddressVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/identitypass/verification/address', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('bvnAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.bvnAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bvn', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('bvnBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.bvnBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bvn_validation', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('bvnPlusFaceValidation', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.bvnPlusFaceValidation({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bvn_w_face', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditBureauCommercialBusinessBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditBureauCommercialBusinessBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/credit_bureau/commercial/basic', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditBureauConsumerIndividualBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditBureauConsumerIndividualBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/credit_bureau/consumer/basic', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditBureauCommercialBusinessAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditBureauCommercialBusinessAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/credit_bureau/commercial/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('creditBureauConsumerIndividualAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.creditBureauConsumerIndividualAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/credit_bureau/consumer/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('driversLicensePlusFaceValidation', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicensePlusFaceValidation({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/drivers_license/face', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('driversLicenseImage', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicenseImage({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/drivers_license/image', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('driversLicenseV2', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.driversLicenseV2({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/drivers_license/advance/v2', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getBvnWithPhoneNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.getBvnWithPhoneNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/bvn_with_phone_advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getTinWithPhoneNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.getTinWithPhoneNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/get-tin-with-phone', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('financialAccountsAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.financialAccountsAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/list/financial_accounts/advance', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('insurancePolicy', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.insurancePolicy({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/insurance_policy', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('internationalPassport', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.internationalPassport({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/national_passport', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('internationalPassportPlusFaceValidation', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.internationalPassportPlusFaceValidation({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/national_passport_with_face', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('internationalPassportImage', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.internationalPassportImage({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/identitypass/verification/stamp_duty', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('listBankCode', () => {
    it('should call get with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);

      const result = await service.listBankCode({ sample: true });

      expect(service['get']).toHaveBeenCalledWith('/identitypass/verification/stamp_duty', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('ninBasic', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.ninBasic({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/vnin-basic', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('ninNinauthLevel2', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.ninNinauthLevel2({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/nin-level-2', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('ninWithFace', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.ninWithFace({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/nin_w_face', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('ninAdvance', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.ninAdvance({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/vnin', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('passportVersion2', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.passportVersion2({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/national_passport_v2', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('plateNumberVerification', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.plateNumberVerification({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/vehicle', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('stampDuty', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.stampDuty({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/stamp_duty', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('taxIdentificationNumberTin', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.taxIdentificationNumberTin({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tin', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('votersCard', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.votersCard({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/voters_card', { sample: true });
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

  describe('scuml', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.scuml({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/scuml', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('tccChecker', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.tccChecker({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/tcc', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('metreNumber', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.metreNumber({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/ng/meter/verify', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('nysc', () => {
    it('should call post with the mapped endpoint', async () => {
      const mockResponse = { status: true, data: {} };
      jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

      const result = await service.nysc({ sample: true });

      expect(service['post']).toHaveBeenCalledWith('/verification/nysc', { sample: true });
      expect(result).toEqual(mockResponse);
    });
  });

});
