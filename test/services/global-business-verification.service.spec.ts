import { GlobalBusinessVerificationService } from '../../src/services/global-business-verification.service';

describe('GlobalBusinessVerificationService', () => {
  it('should map global business endpoints', async () => {
    const service = new GlobalBusinessVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.companySearchByPerson({ person: 'John Doe' });
    await service.companySearchWithRegistrationNumber({ registration_number: '1234' });

    expect(service['post']).toHaveBeenNthCalledWith(
      1,
      '/verification/global/company/search_with_string',
      { person: 'John Doe' },
    );
    expect(service['post']).toHaveBeenNthCalledWith(2, '/verification/global/company', {
      registration_number: '1234',
    });
  });
});
