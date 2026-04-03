import { Inject, Injectable } from '@nestjs/common';
import { PREMBLY_MODULE_OPTIONS } from './constants';
import { PremblyModuleOptions } from './interfaces';
import { GeneralService } from './services/general.service';
import { GlobalBusinessVerificationService } from './services/global-business-verification.service';
import { AmlScreeningService } from './services/aml-screening.service';
import { MultipleCountriesCheckService } from './services/multiple-countries-check.service';
import { GlobalDocumentVerificationService } from './services/global-document-verification.service';
import { BiometricsService } from './services/biometrics.service';
import { BackgroundCheckService } from './services/background-check/background-check.service';
import { DataVerificationService } from './services/data-verification/data-verification.service';
import { TransactionMonitoringService } from './services/transaction-monitoring.service';
import { FraudScanService } from './services/fraud-scan.service';

@Injectable()
export class PremblyService {
  public readonly general: GeneralService;
  public readonly globalBusinessVerification: GlobalBusinessVerificationService;
  public readonly amlScreening: AmlScreeningService;
  public readonly multipleCountriesCheck: MultipleCountriesCheckService;
  public readonly globalDocumentVerification: GlobalDocumentVerificationService;
  public readonly biometrics: BiometricsService;
  public readonly backgroundCheck: BackgroundCheckService;
  public readonly dataVerification: DataVerificationService;
  public readonly transactionMonitoring: TransactionMonitoringService;
  public readonly fraudScan: FraudScanService;

  constructor(
    @Inject(PREMBLY_MODULE_OPTIONS)
    private readonly options: PremblyModuleOptions,
  ) {
    this.general = new GeneralService(this.options);
    this.globalBusinessVerification = new GlobalBusinessVerificationService(this.options);
    this.amlScreening = new AmlScreeningService(this.options);
    this.multipleCountriesCheck = new MultipleCountriesCheckService(this.options);
    this.globalDocumentVerification = new GlobalDocumentVerificationService(this.options);
    this.biometrics = new BiometricsService(this.options);
    this.backgroundCheck = new BackgroundCheckService(this.options);
    this.dataVerification = new DataVerificationService(this.options);
    this.transactionMonitoring = new TransactionMonitoringService(this.options);
    this.fraudScan = new FraudScanService(this.options);
  }

  getConfig(): PremblyModuleOptions {
    return { ...this.options };
  }

  isConfigured(): boolean {
    return !!this.options.apiKey;
  }
}
