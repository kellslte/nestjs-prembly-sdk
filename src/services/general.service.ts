import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const GENERAL_METHODS = [
  {
    name: 'getWalletBalance',
    method: 'get',
    endpoint: '/api/v1/wallet',
  },
  {
    name: 'getVerificationStatus',
    method: 'get',
    endpoint: '/verification/:id/status',
    hasPathParam: true,
  },
  {
    name: 'verifyVinOrChassis',
    method: 'post',
    endpoint: '/verification/vehicle/vin',
  },
  {
    name: 'getSdkSession',
    method: 'get',
    endpoint: '/api/v1/checker-widget/sdk/sessions/',
  },
] as const;

export class GeneralService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, GENERAL_METHODS);
  }

  getWalletBalance() {
    return this.execute('getWalletBalance');
  }

  getVerificationStatus(id: string | number, params?: Record<string, any>) {
    return this.execute('getVerificationStatus', id, params);
  }

  verifyVinOrChassis(data: Record<string, any>) {
    return this.execute('verifyVinOrChassis', data);
  }

  getSdkSession(params?: Record<string, any>) {
    return this.execute('getSdkSession', params);
  }
}
