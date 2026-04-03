import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: 'listSystemPackages',
    method: 'get',
    endpoint: '/api/v1/api/bgc/system-packages/',
  },
  {
    name: 'getSystemPackageDetail',
    method: 'get',
    endpoint: '/api/v1/api/bgc/system-packages/:id',
    hasPathParam: true,
  },
  {
    name: 'listCustomPackages',
    method: 'get',
    endpoint: '/api/v1/api/bgc/packages/',
  },
  {
    name: 'createCustomPackage',
    method: 'post',
    endpoint: '/api/v1/api/bgc/packages/',
  },
  {
    name: 'getCustomPackageDetail',
    method: 'get',
    endpoint: '/api/v1/api/bgc/packages/:id',
    hasPathParam: true,
  },
  {
    name: 'updateCustomPackage',
    method: 'put',
    endpoint: '/api/v1/api/bgc/packages/:id/',
    hasPathParam: true,
  },
  {
    name: 'deleteCustomPackage',
    method: 'delete',
    endpoint: '/api/v1/api/bgc/packages/:id/',
    hasPathParam: true,
  },
] as const;

export class PackageBackgroundCheckService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  listSystemPackages(params?: Record<string, any>) {
    return this.execute('listSystemPackages', params);
  }

  getSystemPackageDetail(id: string | number) {
    return this.execute('getSystemPackageDetail', id);
  }

  listCustomPackages(params?: Record<string, any>) {
    return this.execute('listCustomPackages', params);
  }

  createCustomPackage(data: Record<string, any>) {
    return this.execute('createCustomPackage', data);
  }

  getCustomPackageDetail(id: string | number) {
    return this.execute('getCustomPackageDetail', id);
  }

  updateCustomPackage(id: string | number, data: Record<string, any>) {
    return this.execute('updateCustomPackage', id, data);
  }

  deleteCustomPackage(id: string | number) {
    return this.execute('deleteCustomPackage', id);
  }
}
