import { FraudScanService } from '../../src/services/fraud-scan.service';

describe('FraudScanService', () => {
  it('should map fraud scan endpoints', async () => {
    const service = new FraudScanService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);

    await service.faceScan({ image: 'abc' });
    await service.idScan({ image: 'abc' });
    await service.submitFraudReport({ report: true });
    await service.getFraudReportDetail('report-1');
    await service.listFraudReports({ page: 1 });
    await service.listBulkScans({ page: 1 });
    await service.getBulkScanDetail('bulk-1');
    await service.bulkScanUpload({ file: 'url' });

    expect(service['post']).toHaveBeenNthCalledWith(1, '/api/v1/fraud/face-scan/', {
      image: 'abc',
    });
    expect(service['post']).toHaveBeenNthCalledWith(2, '/api/v1/fraud/id-scan/', {
      image: 'abc',
    });
    expect(service['post']).toHaveBeenNthCalledWith(3, '/api/v1/fraud/reports/submit/', {
      report: true,
    });
    expect(service['get']).toHaveBeenNthCalledWith(1, '/api/v1/fraud/reports/report-1/', undefined);
    expect(service['get']).toHaveBeenNthCalledWith(2, '/api/v1/fraud/reports/', { page: 1 });
    expect(service['get']).toHaveBeenNthCalledWith(3, '/api/v1/fraud/bulk-scan/', { page: 1 });
    expect(service['get']).toHaveBeenNthCalledWith(4, '/api/v1/fraud/bulk-scan/bulk-1/', undefined);
    expect(service['get']).toHaveBeenNthCalledWith(5, '/api/v1/fraud/bulk-scan/upload/', {
      file: 'url',
    });
  });
});
