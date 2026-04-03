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
    name: "companySearchAdvance",
    method: "post",
    endpoint: "/verification/asia/kyb/search-lite",
    hasPathParam: false
  },
  {
    name: "getCompanyNumberNewZealand",
    method: "post",
    endpoint: "/verification/asia/kyb/get-company-number",
    hasPathParam: false
  }
] as const;

export class NewZealandDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  businessSearch(data: Record<string, any>) {
    return this.execute('businessSearch', data);
  }

  businessSearchAdvance(data: Record<string, any>) {
    return this.execute('businessSearchAdvance', data);
  }

  companySearchAdvance(data: Record<string, any>) {
    return this.execute('companySearchAdvance', data);
  }

  getCompanyNumberNewZealand(data: Record<string, any>) {
    return this.execute('getCompanyNumberNewZealand', data);
  }

}
