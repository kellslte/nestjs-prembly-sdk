import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "tinTaxIdentificationNumber",
    method: "post",
    endpoint: "/verification/mw_tin",
    hasPathParam: false
  },
  {
    name: "phoneNumberVerification",
    method: "post",
    endpoint: "/verification/mw_phone",
    hasPathParam: false
  },
  {
    name: "businessVerificationPlusUbo",
    method: "post",
    endpoint: "/verification/business/ubo",
    hasPathParam: false
  }
] as const;

export class MalawiDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  tinTaxIdentificationNumber(data: Record<string, any>) {
    return this.execute('tinTaxIdentificationNumber', data);
  }

  phoneNumberVerification(data: Record<string, any>) {
    return this.execute('phoneNumberVerification', data);
  }

  businessVerificationPlusUbo(data: Record<string, any>) {
    return this.execute('businessVerificationPlusUbo', data);
  }

}
