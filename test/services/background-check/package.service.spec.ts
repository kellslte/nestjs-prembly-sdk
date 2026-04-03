import { PackageBackgroundCheckService } from '../../../src/services/background-check/package.service';

describe('PackageBackgroundCheckService', () => {
  it('should map package background-check endpoints', async () => {
    const service = new PackageBackgroundCheckService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'put').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'delete').mockResolvedValue(mockResponse);

    await service.listSystemPackages({ page: 1 });
    await service.getSystemPackageDetail('pkg-1');
    await service.listCustomPackages({ page: 1 });
    await service.createCustomPackage({ name: 'Package' });
    await service.getCustomPackageDetail('pkg-2');
    await service.updateCustomPackage('pkg-2', { name: 'Updated' });
    await service.deleteCustomPackage('pkg-2');

    expect(service['get']).toHaveBeenNthCalledWith(1, '/api/v1/api/bgc/system-packages/', { page: 1 });
    expect(service['get']).toHaveBeenNthCalledWith(2, '/api/v1/api/bgc/system-packages/pkg-1', undefined);
    expect(service['get']).toHaveBeenNthCalledWith(3, '/api/v1/api/bgc/packages/', { page: 1 });
    expect(service['post']).toHaveBeenCalledWith('/api/v1/api/bgc/packages/', { name: 'Package' });
    expect(service['get']).toHaveBeenNthCalledWith(4, '/api/v1/api/bgc/packages/pkg-2', undefined);
    expect(service['put']).toHaveBeenCalledWith('/api/v1/api/bgc/packages/pkg-2/', {
      name: 'Updated',
    });
    expect(service['delete']).toHaveBeenCalledWith('/api/v1/api/bgc/packages/pkg-2/');
  });
});
