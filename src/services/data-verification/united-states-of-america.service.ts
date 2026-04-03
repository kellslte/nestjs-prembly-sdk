import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "phoneNumberAdvance",
    method: "post",
    endpoint: "/verification/global/phone-status-check",
    hasPathParam: false
  }
] as const;

export class UnitedStatesOfAmericaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  phoneNumberAdvance(data: Record<string, any>) {
    return this.execute('phoneNumberAdvance', data);
  }

}
