import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: 'createCandidateRequest',
    method: 'post',
    endpoint: '/api/v1/api/bgc/requests/candidates/',
  },
  {
    name: 'listCandidateRequests',
    method: 'get',
    endpoint: '/api/v1/api/bgc/requests/candidates/',
  },
  {
    name: 'getCandidateRequestDetail',
    method: 'get',
    endpoint: '/requests/candidates/:id/',
    hasPathParam: true,
  },
  {
    name: 'reinitiateCandidateRequest',
    method: 'post',
    endpoint: '/candidates/:id/reinitiate/',
    hasPathParam: true,
  },
] as const;

export class CandidateBackgroundCheckService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  createCandidateRequest(data: Record<string, any>) {
    return this.execute('createCandidateRequest', data);
  }

  listCandidateRequests(params?: Record<string, any>) {
    return this.execute('listCandidateRequests', params);
  }

  getCandidateRequestDetail(id: string | number) {
    return this.execute('getCandidateRequestDetail', id);
  }

  reinitiateCandidateRequest(id: string | number, data?: Record<string, any>) {
    return this.execute('reinitiateCandidateRequest', id, data);
  }
}
