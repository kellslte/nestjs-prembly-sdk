import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "waecVerification",
    method: "post",
    endpoint: "/verification/waec",
    hasPathParam: false
  }
] as const;

export class GambiaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  waecVerification(data: Record<string, any>) {
    return this.execute('waecVerification', data);
  }

}
