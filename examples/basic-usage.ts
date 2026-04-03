import { Module, Injectable } from '@nestjs/common';
import { PremblyModule, PremblyService } from '../src';

@Module({
  imports: [
    PremblyModule.forRoot({
      apiKey: 'your-prembly-api-key',
      appId: 'your-prembly-app-id',
      baseUrl: 'https://api.prembly.com',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
      maxRetryDelay: 10000,
    }),
  ],
})
export class BasicPremblyModule {}

@Injectable()
export class VerificationService {
  constructor(private readonly premblyService: PremblyService) {}

  verifyNigeriaBvn(bvn: string) {
    return this.premblyService.dataVerification.nigeria.bvnBasic({ number: bvn });
  }

  runPepScreening(name: string) {
    return this.premblyService.amlScreening.pepAndSanction({ name });
  }

  fetchWalletBalance() {
    return this.premblyService.general.getWalletBalance();
  }

  submitFraudFaceScan(image: string) {
    return this.premblyService.fraudScan.faceScan({ image });
  }
}
