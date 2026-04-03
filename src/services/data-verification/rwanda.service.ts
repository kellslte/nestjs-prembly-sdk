import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "tin",
    method: "post",
    endpoint: "/verification/rw_tin/",
    hasPathParam: false
  },
  {
    name: "phoneNumberVerification",
    method: "post",
    endpoint: "/verification/rw_phone",
    hasPathParam: false
  },
  {
    name: "businessPlusUboVerification",
    method: "post",
    endpoint: "/verification/rw_business",
    hasPathParam: false
  }
] as const;

export class RwandaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  tin(data: Record<string, any>) {
    return this.execute('tin', data);
  }

  phoneNumberVerification(data: Record<string, any>) {
    return this.execute('phoneNumberVerification', data);
  }

  businessPlusUboVerification(data: Record<string, any>) {
    return this.execute('businessPlusUboVerification', data);
  }

}
