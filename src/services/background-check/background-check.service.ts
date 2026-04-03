import { PremblyModuleOptions } from '../../interfaces';
import { CandidateBackgroundCheckService } from './candidate.service';
import { PackageBackgroundCheckService } from './package.service';
import { ConfigurationBackgroundCheckService } from './configuration.service';

export class BackgroundCheckService {
  public readonly candidate: CandidateBackgroundCheckService;
  public readonly package: PackageBackgroundCheckService;
  public readonly configuration: ConfigurationBackgroundCheckService;

  constructor(options: PremblyModuleOptions) {
    this.candidate = new CandidateBackgroundCheckService(options);
    this.package = new PackageBackgroundCheckService(options);
    this.configuration = new ConfigurationBackgroundCheckService(options);
  }
}
