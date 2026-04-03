import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'pepAndSanction',
    method: 'post',
    endpoint: '/api/v1/verification/aml-screening/',
  },
] as const;

export class AmlScreeningService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  pepAndSanction(data: Record<string, any>) {
    return this.execute('pepAndSanction', data);
  }
}
