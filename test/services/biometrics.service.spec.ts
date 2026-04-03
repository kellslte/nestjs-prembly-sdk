import { BiometricsService } from '../../src/services/biometrics.service';

describe('BiometricsService', () => {
  it('should map biometrics endpoints', async () => {
    const service = new BiometricsService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.ageAndGender({ image: 'abc' });
    await service.compareFace({ image: 'abc' });
    await service.checkFaceLiveliness({ image: 'abc' });

    expect(service['post']).toHaveBeenNthCalledWith(
      1,
      '/verification/biometrics/face/age_and_gender',
      { image: 'abc' },
    );
    expect(service['post']).toHaveBeenNthCalledWith(
      2,
      '/verification/biometrics/face/comparison',
      { image: 'abc' },
    );
    expect(service['post']).toHaveBeenNthCalledWith(
      3,
      '/verification/biometrics/face/liveliness_check',
      { image: 'abc' },
    );
  });
});
