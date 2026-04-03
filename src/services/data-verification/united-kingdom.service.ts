import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "companySearchBasic",
    method: "post",
    endpoint: "/verification/uk/business-check",
    hasPathParam: false
  },
  {
    name: "phoneNumberAdvance",
    method: "post",
    endpoint: "/verification/global/phone-status-check",
    hasPathParam: false
  },
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/uk/phone-intelligence-check",
    hasPathParam: false
  }
] as const;

export class UnitedKingdomDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  companySearchBasic(data: Record<string, any>) {
    return this.execute('companySearchBasic', data);
  }

  phoneNumberAdvance(data: Record<string, any>) {
    return this.execute('phoneNumberAdvance', data);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

}
