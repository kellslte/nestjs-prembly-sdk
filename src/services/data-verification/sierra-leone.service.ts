import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "driversLicense",
    method: "post",
    endpoint: "/verification/sierraleone/drivers-license",
    hasPathParam: false
  },
  {
    name: "nationalId",
    method: "post",
    endpoint: "/verification/sl/national-id-verification",
    hasPathParam: false
  },
  {
    name: "waecVerification",
    method: "post",
    endpoint: "/verification/waec",
    hasPathParam: false
  }
] as const;

export class SierraLeoneDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  driversLicense(data: Record<string, any>) {
    return this.execute('driversLicense', data);
  }

  nationalId(data: Record<string, any>) {
    return this.execute('nationalId', data);
  }

  waecVerification(data: Record<string, any>) {
    return this.execute('waecVerification', data);
  }

}
