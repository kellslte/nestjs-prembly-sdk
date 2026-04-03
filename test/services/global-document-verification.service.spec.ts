import { GlobalDocumentVerificationService } from '../../src/services/global-document-verification.service';

describe('GlobalDocumentVerificationService', () => {
  it('should map document verification endpoints', async () => {
    const service = new GlobalDocumentVerificationService({
      apiKey: 'test-api-key',
      appId: 'test-app-id',
      baseUrl: 'https://api.prembly.com',
    });
    const mockResponse = { status: true, data: {} };
    jest.spyOn(service as any, 'post').mockResolvedValue(mockResponse);

    await service.verifyDocument({ doc_type: 'passport' });
    await service.verifyDocumentWithFace({ doc_type: 'passport', selfie: 'abc' });
    await service.verifyNuit({ nuit: '123' });

    expect(service['post']).toHaveBeenNthCalledWith(1, '/verification/document', {
      doc_type: 'passport',
    });
    expect(service['post']).toHaveBeenNthCalledWith(2, '/verification/document_w_face', {
      doc_type: 'passport',
      selfie: 'abc',
    });
    expect(service['post']).toHaveBeenNthCalledWith(3, '/verification/global/nuit-check', {
      nuit: '123',
    });
  });
});
