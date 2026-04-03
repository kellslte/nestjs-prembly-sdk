import { TransactionMonitoringService } from '../../src/services/transaction-monitoring.service';

describe('TransactionMonitoringService', () => {
  it('should map the transaction monitoring endpoint', async () => {
    const service = new TransactionMonitoringService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.monitorTransaction({ amount: 1000 });

    expect(service['post']).toHaveBeenCalledWith(
      '/api/v1/fraud/transaction-monitoring/screen-transaction',
      { amount: 1000 },
    );
  });
});
