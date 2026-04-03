import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "accountWithNameComparism",
    method: "post",
    endpoint: "/verification/bank_account/comparism",
    hasPathParam: false
  },
  {
    name: "addressVerification",
    method: "post",
    endpoint: "/verification/address",
    hasPathParam: false
  },
  {
    name: "addressVerificationStatus",
    method: "post",
    endpoint: "/verification/address/status",
    hasPathParam: false
  },
  {
    name: "advanceCac",
    method: "post",
    endpoint: "/verification/cac/advance",
    hasPathParam: false
  },
  {
    name: "advanceDriversLicense",
    method: "post",
    endpoint: "/verification/drivers_license/advance",
    hasPathParam: false
  },
  {
    name: "advancePhoneNumber",
    method: "post",
    endpoint: "/verification/phone_number/advance",
    hasPathParam: false
  },
  {
    name: "bankAccountBasic",
    method: "post",
    endpoint: "/verification/bank_account/basic",
    hasPathParam: false
  },
  {
    name: "basicCac",
    method: "post",
    endpoint: "/verification/cac",
    hasPathParam: false
  },
  {
    name: "basicPhoneNumber",
    method: "post",
    endpoint: "/verification/phone_number",
    hasPathParam: false
  },
  {
    name: "businessAddressVerification",
    method: "post",
    endpoint: "/identitypass/verification/address",
    hasPathParam: false
  },
  {
    name: "bvnAdvance",
    method: "post",
    endpoint: "/verification/bvn",
    hasPathParam: false
  },
  {
    name: "bvnBasic",
    method: "post",
    endpoint: "/verification/bvn_validation",
    hasPathParam: false
  },
  {
    name: "bvnPlusFaceValidation",
    method: "post",
    endpoint: "/verification/bvn_w_face",
    hasPathParam: false
  },
  {
    name: "creditBureauCommercialBusinessBasic",
    method: "post",
    endpoint: "/verification/credit_bureau/commercial/basic",
    hasPathParam: false
  },
  {
    name: "creditBureauConsumerIndividualBasic",
    method: "post",
    endpoint: "/verification/credit_bureau/consumer/basic",
    hasPathParam: false
  },
  {
    name: "creditBureauCommercialBusinessAdvance",
    method: "post",
    endpoint: "/verification/credit_bureau/commercial/advance",
    hasPathParam: false
  },
  {
    name: "creditBureauConsumerIndividualAdvance",
    method: "post",
    endpoint: "/verification/credit_bureau/consumer/advance",
    hasPathParam: false
  },
  {
    name: "driversLicensePlusFaceValidation",
    method: "post",
    endpoint: "/verification/drivers_license/face",
    hasPathParam: false
  },
  {
    name: "driversLicenseImage",
    method: "post",
    endpoint: "/verification/drivers_license/image",
    hasPathParam: false
  },
  {
    name: "driversLicenseV2",
    method: "post",
    endpoint: "/verification/drivers_license/advance/v2",
    hasPathParam: false
  },
  {
    name: "getBvnWithPhoneNumber",
    method: "post",
    endpoint: "/verification/bvn_with_phone_advance",
    hasPathParam: false
  },
  {
    name: "getTinWithPhoneNumber",
    method: "post",
    endpoint: "/verification/get-tin-with-phone",
    hasPathParam: false
  },
  {
    name: "financialAccountsAdvance",
    method: "post",
    endpoint: "/verification/list/financial_accounts/advance",
    hasPathParam: false
  },
  {
    name: "insurancePolicy",
    method: "post",
    endpoint: "/verification/insurance_policy",
    hasPathParam: false
  },
  {
    name: "internationalPassport",
    method: "post",
    endpoint: "/verification/national_passport",
    hasPathParam: false
  },
  {
    name: "internationalPassportPlusFaceValidation",
    method: "post",
    endpoint: "/verification/national_passport_with_face",
    hasPathParam: false
  },
  {
    name: "internationalPassportImage",
    method: "post",
    endpoint: "/identitypass/verification/stamp_duty",
    hasPathParam: false
  },
  {
    name: "listBankCode",
    method: "get",
    endpoint: "/identitypass/verification/stamp_duty",
    hasPathParam: false
  },
  {
    name: "ninBasic",
    method: "post",
    endpoint: "/verification/vnin-basic",
    hasPathParam: false
  },
  {
    name: "ninNinauthLevel2",
    method: "post",
    endpoint: "/verification/nin-level-2",
    hasPathParam: false
  },
  {
    name: "ninWithFace",
    method: "post",
    endpoint: "/verification/nin_w_face",
    hasPathParam: false
  },
  {
    name: "ninAdvance",
    method: "post",
    endpoint: "/verification/vnin",
    hasPathParam: false
  },
  {
    name: "passportVersion2",
    method: "post",
    endpoint: "/verification/national_passport_v2",
    hasPathParam: false
  },
  {
    name: "plateNumberVerification",
    method: "post",
    endpoint: "/verification/vehicle",
    hasPathParam: false
  },
  {
    name: "stampDuty",
    method: "post",
    endpoint: "/verification/stamp_duty",
    hasPathParam: false
  },
  {
    name: "taxIdentificationNumberTin",
    method: "post",
    endpoint: "/verification/tin",
    hasPathParam: false
  },
  {
    name: "votersCard",
    method: "post",
    endpoint: "/verification/voters_card",
    hasPathParam: false
  },
  {
    name: "waecVerification",
    method: "post",
    endpoint: "/verification/waec",
    hasPathParam: false
  },
  {
    name: "scuml",
    method: "post",
    endpoint: "/verification/scuml",
    hasPathParam: false
  },
  {
    name: "tccChecker",
    method: "post",
    endpoint: "/verification/tcc",
    hasPathParam: false
  },
  {
    name: "metreNumber",
    method: "post",
    endpoint: "/verification/ng/meter/verify",
    hasPathParam: false
  },
  {
    name: "nysc",
    method: "post",
    endpoint: "/verification/nysc",
    hasPathParam: false
  }
] as const;

export class NigeriaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  accountWithNameComparism(data: Record<string, any>) {
    return this.execute('accountWithNameComparism', data);
  }

  addressVerification(data: Record<string, any>) {
    return this.execute('addressVerification', data);
  }

  addressVerificationStatus(data: Record<string, any>) {
    return this.execute('addressVerificationStatus', data);
  }

  advanceCac(data: Record<string, any>) {
    return this.execute('advanceCac', data);
  }

  advanceDriversLicense(data: Record<string, any>) {
    return this.execute('advanceDriversLicense', data);
  }

  advancePhoneNumber(data: Record<string, any>) {
    return this.execute('advancePhoneNumber', data);
  }

  bankAccountBasic(data: Record<string, any>) {
    return this.execute('bankAccountBasic', data);
  }

  basicCac(data: Record<string, any>) {
    return this.execute('basicCac', data);
  }

  basicPhoneNumber(data: Record<string, any>) {
    return this.execute('basicPhoneNumber', data);
  }

  businessAddressVerification(data: Record<string, any>) {
    return this.execute('businessAddressVerification', data);
  }

  bvnAdvance(data: Record<string, any>) {
    return this.execute('bvnAdvance', data);
  }

  bvnBasic(data: Record<string, any>) {
    return this.execute('bvnBasic', data);
  }

  bvnPlusFaceValidation(data: Record<string, any>) {
    return this.execute('bvnPlusFaceValidation', data);
  }

  creditBureauCommercialBusinessBasic(data: Record<string, any>) {
    return this.execute('creditBureauCommercialBusinessBasic', data);
  }

  creditBureauConsumerIndividualBasic(data: Record<string, any>) {
    return this.execute('creditBureauConsumerIndividualBasic', data);
  }

  creditBureauCommercialBusinessAdvance(data: Record<string, any>) {
    return this.execute('creditBureauCommercialBusinessAdvance', data);
  }

  creditBureauConsumerIndividualAdvance(data: Record<string, any>) {
    return this.execute('creditBureauConsumerIndividualAdvance', data);
  }

  driversLicensePlusFaceValidation(data: Record<string, any>) {
    return this.execute('driversLicensePlusFaceValidation', data);
  }

  driversLicenseImage(data: Record<string, any>) {
    return this.execute('driversLicenseImage', data);
  }

  driversLicenseV2(data: Record<string, any>) {
    return this.execute('driversLicenseV2', data);
  }

  getBvnWithPhoneNumber(data: Record<string, any>) {
    return this.execute('getBvnWithPhoneNumber', data);
  }

  getTinWithPhoneNumber(data: Record<string, any>) {
    return this.execute('getTinWithPhoneNumber', data);
  }

  financialAccountsAdvance(data: Record<string, any>) {
    return this.execute('financialAccountsAdvance', data);
  }

  insurancePolicy(data: Record<string, any>) {
    return this.execute('insurancePolicy', data);
  }

  internationalPassport(data: Record<string, any>) {
    return this.execute('internationalPassport', data);
  }

  internationalPassportPlusFaceValidation(data: Record<string, any>) {
    return this.execute('internationalPassportPlusFaceValidation', data);
  }

  internationalPassportImage(data: Record<string, any>) {
    return this.execute('internationalPassportImage', data);
  }

  listBankCode(params?: Record<string, any>) {
    return this.execute('listBankCode', params);
  }

  ninBasic(data: Record<string, any>) {
    return this.execute('ninBasic', data);
  }

  ninNinauthLevel2(data: Record<string, any>) {
    return this.execute('ninNinauthLevel2', data);
  }

  ninWithFace(data: Record<string, any>) {
    return this.execute('ninWithFace', data);
  }

  ninAdvance(data: Record<string, any>) {
    return this.execute('ninAdvance', data);
  }

  passportVersion2(data: Record<string, any>) {
    return this.execute('passportVersion2', data);
  }

  plateNumberVerification(data: Record<string, any>) {
    return this.execute('plateNumberVerification', data);
  }

  stampDuty(data: Record<string, any>) {
    return this.execute('stampDuty', data);
  }

  taxIdentificationNumberTin(data: Record<string, any>) {
    return this.execute('taxIdentificationNumberTin', data);
  }

  votersCard(data: Record<string, any>) {
    return this.execute('votersCard', data);
  }

  waecVerification(data: Record<string, any>) {
    return this.execute('waecVerification', data);
  }

  scuml(data: Record<string, any>) {
    return this.execute('scuml', data);
  }

  tccChecker(data: Record<string, any>) {
    return this.execute('tccChecker', data);
  }

  metreNumber(data: Record<string, any>) {
    return this.execute('metreNumber', data);
  }

  nysc(data: Record<string, any>) {
    return this.execute('nysc', data);
  }

}
