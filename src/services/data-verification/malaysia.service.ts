import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "creditBureauBasic",
    method: "post",
    endpoint: "/verification/asia/kyc/credit-bureau/basic",
    hasPathParam: false
  }
] as const;

export class MalaysiaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  creditBureauBasic(data: Record<string, any>) {
    return this.execute('creditBureauBasic', data);
  }

}
