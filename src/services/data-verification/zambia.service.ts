import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "nationalId",
    method: "post",
    endpoint: "/verification/gb/id",
    hasPathParam: false
  },
  {
    name: "phoneVerification",
    method: "post",
    endpoint: "/legacy/zambia/phone",
    hasPathParam: false
  },
  {
    name: "tinVerification",
    method: "post",
    endpoint: "/zm_tin/",
    hasPathParam: false
  }
] as const;

export class ZambiaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  nationalId(data: Record<string, any>) {
    return this.execute('nationalId', data);
  }

  phoneVerification(data: Record<string, any>) {
    return this.execute('phoneVerification', data);
  }

  tinVerification(data: Record<string, any>) {
    return this.execute('tinVerification', data);
  }

}
