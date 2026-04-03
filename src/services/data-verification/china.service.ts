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
    name: "chinaGovernmentIdVerification",
    method: "post",
    endpoint: "/verification/asia/kyc/china/verify-govt-id/basic",
    hasPathParam: false
  },
  {
    name: "chinaPassportVerification",
    method: "post",
    endpoint: "/verification/asia/kyc/china/verify-passport/basic",
    hasPathParam: false
  },
  {
    name: "getCompanyNumberChina",
    method: "post",
    endpoint: "/verification/asia/kyb/get-company-number",
    hasPathParam: false
  },
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/asia/kyc/china/verify-phone/basic",
    hasPathParam: false
  }
] as const;

export class ChinaDataVerificationService extends BaseGeneratedService {
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

  chinaGovernmentIdVerification(data: Record<string, any>) {
    return this.execute('chinaGovernmentIdVerification', data);
  }

  chinaPassportVerification(data: Record<string, any>) {
    return this.execute('chinaPassportVerification', data);
  }

  getCompanyNumberChina(data: Record<string, any>) {
    return this.execute('getCompanyNumberChina', data);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

}
