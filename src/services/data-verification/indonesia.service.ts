import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/indonesia/phone-verification",
    hasPathParam: false
  }
] as const;

export class IndonesiaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

}
