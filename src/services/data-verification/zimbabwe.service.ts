import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "tinVerification",
    method: "post",
    endpoint: "/verification/api/zw_tin/",
    hasPathParam: false
  },
  {
    name: "phoneNumberVerification",
    method: "post",
    endpoint: "/verification/api/zw_phone/",
    hasPathParam: false
  },
  {
    name: "businessVerificationPlusUbo",
    method: "post",
    endpoint: "/verification/api/zw_business/",
    hasPathParam: false
  }
] as const;

export class ZimbabweDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  tinVerification(data: Record<string, any>) {
    return this.execute('tinVerification', data);
  }

  phoneNumberVerification(data: Record<string, any>) {
    return this.execute('phoneNumberVerification', data);
  }

  businessVerificationPlusUbo(data: Record<string, any>) {
    return this.execute('businessVerificationPlusUbo', data);
  }

}
