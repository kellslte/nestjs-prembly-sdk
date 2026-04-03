import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'companySearchByPerson',
    method: 'post',
    endpoint: '/verification/global/company/search_with_string',
  },
  {
    name: 'companySearchWithRegistrationNumber',
    method: 'post',
    endpoint: '/verification/global/company',
  },
] as const;

export class GlobalBusinessVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  companySearchByPerson(data: Record<string, any>) {
    return this.execute('companySearchByPerson', data);
  }

  companySearchWithRegistrationNumber(data: Record<string, any>) {
    return this.execute('companySearchWithRegistrationNumber', data);
  }
}
