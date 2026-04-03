import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "basicCompanySearch",
    method: "post",
    endpoint: "/greece/busness-check",
    hasPathParam: false
  }
] as const;

export class GreeceDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  basicCompanySearch(data: Record<string, any>) {
    return this.execute('basicCompanySearch', data);
  }

}
