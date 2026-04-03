import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "companySearchBasic",
    method: "post",
    endpoint: "/verification/canada/company-search",
    hasPathParam: false
  }
] as const;

export class CanadaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  companySearchBasic(data: Record<string, any>) {
    return this.execute('companySearchBasic', data);
  }

}
