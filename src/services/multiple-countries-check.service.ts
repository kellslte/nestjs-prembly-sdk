import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'verifyTaxIdentificationNumber',
    method: 'post',
    endpoint: '/verification/global/tin-check',
  },
  {
    name: 'geoLocate',
    method: 'post',
    endpoint: '/verification/address/geolocation/verification',
  },
] as const;

export class MultipleCountriesCheckService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  verifyTaxIdentificationNumber(data: Record<string, any>) {
    return this.execute('verifyTaxIdentificationNumber', data);
  }

  geoLocate(data: Record<string, any>) {
    return this.execute('geoLocate', data);
  }
}
