import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'monitorTransaction',
    method: 'post',
    endpoint: '/api/v1/fraud/transaction-monitoring/screen-transaction',
  },
] as const;

export class TransactionMonitoringService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  monitorTransaction(data: Record<string, any>) {
    return this.execute('monitorTransaction', data);
  }
}
