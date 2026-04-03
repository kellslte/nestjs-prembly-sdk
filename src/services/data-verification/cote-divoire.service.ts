import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "companySearchBasic",
    method: "post",
    endpoint: "/verification/ivory-coast/company-search",
    hasPathParam: false
  },
  {
    name: "nationalIdentityNumber",
    method: "post",
    endpoint: "/verification/ivory-coast/id-verification",
    hasPathParam: false
  },
  {
    name: "residentIdentityNumber",
    method: "post",
    endpoint: "/verification/ivory-coast/resident-card-verification",
    hasPathParam: false
  }
] as const;

export class CoteDivoireDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  companySearchBasic(data: Record<string, any>) {
    return this.execute('companySearchBasic', data);
  }

  nationalIdentityNumber(data: Record<string, any>) {
    return this.execute('nationalIdentityNumber', data);
  }

  residentIdentityNumber(data: Record<string, any>) {
    return this.execute('residentIdentityNumber', data);
  }

}
