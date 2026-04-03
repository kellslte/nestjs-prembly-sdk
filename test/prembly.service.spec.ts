import { Test, TestingModule } from '@nestjs/testing';
import { PremblyModule } from '../src/prembly.module';
import { PremblyService } from '../src/prembly.service';

describe('PremblyService', () => {
  let service: PremblyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PremblyModule.forRoot({
          apiKey: 'test-api-key',
          appId: 'test-app-id',
          baseUrl: 'https://api.prembly.com',
        }),
      ],
    }).compile();

    service = module.get<PremblyService>(PremblyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should expose all top-level domain services', () => {
    expect(service.general).toBeDefined();
    expect(service.globalBusinessVerification).toBeDefined();
    expect(service.amlScreening).toBeDefined();
    expect(service.multipleCountriesCheck).toBeDefined();
    expect(service.globalDocumentVerification).toBeDefined();
    expect(service.biometrics).toBeDefined();
    expect(service.backgroundCheck).toBeDefined();
    expect(service.dataVerification).toBeDefined();
    expect(service.transactionMonitoring).toBeDefined();
    expect(service.fraudScan).toBeDefined();
  });

  it('should expose nested grouped services', () => {
    expect(service.backgroundCheck.candidate).toBeDefined();
    expect(service.backgroundCheck.package).toBeDefined();
    expect(service.backgroundCheck.configuration).toBeDefined();
    expect(service.dataVerification.nigeria).toBeDefined();
    expect(service.dataVerification.kenya).toBeDefined();
  });

  it('should report configured when only apiKey is provided', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PremblyModule.forRoot({
          apiKey: 'test-api-key',
        }),
      ],
    }).compile();

    const prembly = module.get<PremblyService>(PremblyService);

    expect(prembly.isConfigured()).toBe(true);
  });
});
