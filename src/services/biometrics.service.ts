import { PremblyModuleOptions } from '../interfaces';
import { BaseGeneratedService } from './core/base-generated.service';

const METHODS = [
  {
    name: 'ageAndGender',
    method: 'post',
    endpoint: '/verification/biometrics/face/age_and_gender',
  },
  {
    name: 'compareFace',
    method: 'post',
    endpoint: '/verification/biometrics/face/comparison',
  },
  {
    name: 'checkFaceLiveliness',
    method: 'post',
    endpoint: '/verification/biometrics/face/liveliness_check',
  },
] as const;

export class BiometricsService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  ageAndGender(data: Record<string, any>) {
    return this.execute('ageAndGender', data);
  }

  compareFace(data: Record<string, any>) {
    return this.execute('compareFace', data);
  }

  checkFaceLiveliness(data: Record<string, any>) {
    return this.execute('checkFaceLiveliness', data);
  }
}
