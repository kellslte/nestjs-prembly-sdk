import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'faceScan',
    method: 'post',
    endpoint: '/api/v1/fraud/face-scan/',
  },
  {
    name: 'idScan',
    method: 'post',
    endpoint: '/api/v1/fraud/id-scan/',
  },
  {
    name: 'submitFraudReport',
    method: 'post',
    endpoint: '/api/v1/fraud/reports/submit/',
  },
  {
    name: 'getFraudReportDetail',
    method: 'get',
    endpoint: '/api/v1/fraud/reports/:id/',
    hasPathParam: true,
  },
  {
    name: 'listFraudReports',
    method: 'get',
    endpoint: '/api/v1/fraud/reports/',
  },
  {
    name: 'listBulkScans',
    method: 'get',
    endpoint: '/api/v1/fraud/bulk-scan/',
  },
  {
    name: 'getBulkScanDetail',
    method: 'get',
    endpoint: '/api/v1/fraud/bulk-scan/:id/',
    hasPathParam: true,
  },
  {
    name: 'bulkScanUpload',
    method: 'get',
    endpoint: '/api/v1/fraud/bulk-scan/upload/',
  },
] as const;

export class FraudScanService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  faceScan(data: Record<string, any>) {
    return this.execute('faceScan', data);
  }

  idScan(data: Record<string, any>) {
    return this.execute('idScan', data);
  }

  submitFraudReport(data: Record<string, any>) {
    return this.execute('submitFraudReport', data);
  }

  getFraudReportDetail(id: string | number) {
    return this.execute('getFraudReportDetail', id);
  }

  listFraudReports(params?: Record<string, any>) {
    return this.execute('listFraudReports', params);
  }

  listBulkScans(params?: Record<string, any>) {
    return this.execute('listBulkScans', params);
  }

  getBulkScanDetail(id: string | number) {
    return this.execute('getBulkScanDetail', id);
  }

  bulkScanUpload(params?: Record<string, any>) {
    return this.execute('bulkScanUpload', params);
  }
}
