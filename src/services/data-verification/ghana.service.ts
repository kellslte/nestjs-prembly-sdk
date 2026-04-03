import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "driversLicense",
    method: "post",
    endpoint: "/verification/gh/drivers_license",
    hasPathParam: false
  },
  {
    name: "meterNumberVerification",
    method: "post",
    endpoint: "/verification/gh/meter-verification",
    hasPathParam: false
  },
  {
    name: "meterPaymentHistory",
    method: "post",
    endpoint: "/verification/gh/meter-verification",
    hasPathParam: false
  },
  {
    name: "nationalPassport",
    method: "post",
    endpoint: "/identitypass/verification/gh/voters",
    hasPathParam: false
  },
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/legacy/ghana/phone",
    hasPathParam: false
  },
  {
    name: "taxIdentificationNumber",
    method: "post",
    endpoint: "/verification/gh_tin/",
    hasPathParam: false
  },
  {
    name: "waecVerification",
    method: "post",
    endpoint: "/verification/waec",
    hasPathParam: false
  },
  {
    name: "businessPlusUbo",
    method: "post",
    endpoint: "/verification/legacy/ghana/business",
    hasPathParam: false
  }
] as const;

export class GhanaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  driversLicense(data: Record<string, any>) {
    return this.execute('driversLicense', data);
  }

  meterNumberVerification(data: Record<string, any>) {
    return this.execute('meterNumberVerification', data);
  }

  meterPaymentHistory(data: Record<string, any>) {
    return this.execute('meterPaymentHistory', data);
  }

  nationalPassport(data: Record<string, any>) {
    return this.execute('nationalPassport', data);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

  taxIdentificationNumber(data: Record<string, any>) {
    return this.execute('taxIdentificationNumber', data);
  }

  waecVerification(data: Record<string, any>) {
    return this.execute('waecVerification', data);
  }

  businessPlusUbo(data: Record<string, any>) {
    return this.execute('businessPlusUbo', data);
  }

}
