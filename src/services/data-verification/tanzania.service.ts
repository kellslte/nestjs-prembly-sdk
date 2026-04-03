import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "businessCheck",
    method: "post",
    endpoint: "/verification/tz/business-check",
    hasPathParam: false
  },
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/tz/phone-number-check",
    hasPathParam: false
  },
  {
    name: "taxIdentificationNumberVerification",
    method: "post",
    endpoint: "/verification/tz/id",
    hasPathParam: false
  },
  {
    name: "votersIdentificationNumberVerification",
    method: "post",
    endpoint: "/verification/tz/id",
    hasPathParam: false
  },
  {
    name: "zanzibarResidenceId",
    method: "post",
    endpoint: "/verification/tz/id",
    hasPathParam: false
  }
] as const;

export class TanzaniaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  businessCheck(data: Record<string, any>) {
    return this.execute('businessCheck', data);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

  taxIdentificationNumberVerification(data: Record<string, any>) {
    return this.execute('taxIdentificationNumberVerification', data);
  }

  votersIdentificationNumberVerification(data: Record<string, any>) {
    return this.execute('votersIdentificationNumberVerification', data);
  }

  zanzibarResidenceId(data: Record<string, any>) {
    return this.execute('zanzibarResidenceId', data);
  }

}
