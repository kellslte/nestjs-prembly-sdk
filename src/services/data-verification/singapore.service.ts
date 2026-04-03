import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "businessSearch",
    method: "post",
    endpoint: "/verification/asia/kyb/search",
    hasPathParam: false
  },
  {
    name: "businessSearchAdvance",
    method: "post",
    endpoint: "/verification/asia/kyb/search-advance",
    hasPathParam: false
  },
  {
    name: "creditBureauBasic",
    method: "post",
    endpoint: "/verification/asia/kyc/credit-bureau",
    hasPathParam: false
  },
  {
    name: "companySearchAdvance",
    method: "post",
    endpoint: "/verification/asia/kyb/search-lite",
    hasPathParam: false
  },
  {
    name: "getCompanyNumberSingapore",
    method: "post",
    endpoint: "/verification/asia/kyb/get-company-number",
    hasPathParam: false
  }
] as const;

export class SingaporeDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  businessSearch(data: Record<string, any>) {
    return this.execute('businessSearch', data);
  }

  businessSearchAdvance(data: Record<string, any>) {
    return this.execute('businessSearchAdvance', data);
  }

  creditBureauBasic(data: Record<string, any>) {
    return this.execute('creditBureauBasic', data);
  }

  companySearchAdvance(data: Record<string, any>) {
    return this.execute('companySearchAdvance', data);
  }

  getCompanyNumberSingapore(data: Record<string, any>) {
    return this.execute('getCompanyNumberSingapore', data);
  }

}
