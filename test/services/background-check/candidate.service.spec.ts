import { CandidateBackgroundCheckService } from '../../../src/services/background-check/candidate.service';

describe('CandidateBackgroundCheckService', () => {
  it('should map candidate background-check endpoints', async () => {
    const service = new CandidateBackgroundCheckService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);
    jest.spyOn(service as any, 'get').mockResolvedValue(mockResponse);

    await service.createCandidateRequest({ first_name: 'John' });
    await service.listCandidateRequests({ page: 1 });
    await service.getCandidateRequestDetail('ref-1');
    await service.reinitiateCandidateRequest('ref-1', { force: true });

    expect(service['post']).toHaveBeenNthCalledWith(1, '/api/v1/api/bgc/requests/candidates/', {
      first_name: 'John',
    });
    expect(service['get']).toHaveBeenNthCalledWith(1, '/api/v1/api/bgc/requests/candidates/', {
      page: 1,
    });
    expect(service['get']).toHaveBeenNthCalledWith(2, '/requests/candidates/ref-1/', undefined);
    expect(service['post']).toHaveBeenNthCalledWith(2, '/candidates/ref-1/reinitiate/', {
      force: true,
    });
  });
});
