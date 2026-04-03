import { AmlScreeningService } from '../../src/services/aml-screening.service';

describe('AmlScreeningService', () => {
  it('should map PEP and sanction checks', async () => {
    const service = new AmlScreeningService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.pepAndSanction({ name: 'Jane Doe' });

    expect(service['post']).toHaveBeenCalledWith('/api/v1/verification/aml-screening/', {
      name: 'Jane Doe',
    });
  });
});
