import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: 'listCountries',
    method: 'get',
    endpoint: '/api/v1/api/bgc/countries/',
  },
  {
    name: 'listCheckTypesByCountry',
    method: 'get',
    endpoint: '/api/v1/api/bgc/country/check-types/?country_code=:id',
    hasPathParam: true,
  },
  {
    name: 'listAllCheckTypes',
    method: 'get',
    endpoint: '/api/v1/api/bgc/check-types/',
  },
] as const;

export class ConfigurationBackgroundCheckService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  listCountries(params?: Record<string, any>) {
    return this.execute('listCountries', params);
  }

  listCheckTypesByCountry(countryCode: string) {
    return this.execute('listCheckTypesByCountry', countryCode);
  }

  listAllCheckTypes(params?: Record<string, any>) {
    return this.execute('listAllCheckTypes', params);
  }
}
