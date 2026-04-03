import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'verifyDocument',
    method: 'post',
    endpoint: '/verification/document',
  },
  {
    name: 'verifyDocumentWithFace',
    method: 'post',
    endpoint: '/verification/document_w_face',
  },
  {
    name: 'verifyNuit',
    method: 'post',
    endpoint: '/verification/global/nuit-check',
  },
] as const;

export class GlobalDocumentVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  verifyDocument(data: Record<string, any>) {
    return this.execute('verifyDocument', data);
  }

  verifyDocumentWithFace(data: Record<string, any>) {
    return this.execute('verifyDocumentWithFace', data);
  }

  verifyNuit(data: Record<string, any>) {
    return this.execute('verifyNuit', data);
  }
}
