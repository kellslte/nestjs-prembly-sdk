import { PremblyModuleOptions } from '../../interfaces';
import { BaseGeneratedService } from '../core/base-generated.service';

const METHODS = [
  {
    name: "alienId",
    method: "post",
    endpoint: "/verification/ke/alien_id",
    hasPathParam: false
  },
  {
    name: "bankAccount",
    method: "post",
    endpoint: "/identitypass/verification/bank_account_kenya",
    hasPathParam: false
  },
  {
    name: "creditReferenceBureauAdvance",
    method: "post",
    endpoint: "/verification/ke/crb/advance",
    hasPathParam: false
  },
  {
    name: "creditReferenceBureauBusiness",
    method: "post",
    endpoint: "/verification/ke/crb/business",
    hasPathParam: false
  },
  {
    name: "creditReferenceBureau",
    method: "post",
    endpoint: "/verification/ke/crb",
    hasPathParam: false
  },
  {
    name: "driversLicense",
    method: "post",
    endpoint: "/verification/ke/drivers_license",
    hasPathParam: false
  },
  {
    name: "kenyaBusinessVerification",
    method: "post",
    endpoint: "/verification/ke/brs/search/advanced",
    hasPathParam: false
  },
  {
    name: "mPesaStatementAnalysis",
    method: "post",
    endpoint: "/verification/ke/mpesa/statement_analysis",
    hasPathParam: false
  },
  {
    name: "nationalIdAdvance",
    method: "post",
    endpoint: "/verification/ke/national_id",
    hasPathParam: false
  },
  {
    name: "nationalPassport",
    method: "post",
    endpoint: "/verification/ke/passport",
    hasPathParam: false
  },
  {
    name: "phoneNumberAdvance",
    method: "post",
    endpoint: "/verification/global/phone-status-check",
    hasPathParam: false
  },
  {
    name: "phoneNumberBasic",
    method: "post",
    endpoint: "/verification/ke/phone-number-verification",
    hasPathParam: false
  },
  {
    name: "pinChecker",
    method: "post",
    endpoint: "/verification/ke/tax/pin",
    hasPathParam: false
  },
  {
    name: "psvLicense",
    method: "post",
    endpoint: "/verification/ke/psv_license",
    hasPathParam: false
  },
  {
    name: "serialNumber",
    method: "post",
    endpoint: "/verification/ke/serial",
    hasPathParam: false
  },
  {
    name: "tccChecker",
    method: "post",
    endpoint: "/verification/ke/tax/tcc",
    hasPathParam: false
  },
  {
    name: "whtChecker",
    method: "post",
    endpoint: "/verification/ke/wht",
    hasPathParam: false
  }
] as const;

export class KenyaDataVerificationService extends BaseGeneratedService {
  constructor(options: PremblyModuleOptions) {
    super(options, METHODS);
  }

  alienId(data: Record<string, any>) {
    return this.execute('alienId', data);
  }

  bankAccount(data: Record<string, any>) {
    return this.execute('bankAccount', data);
  }

  creditReferenceBureauAdvance(data: Record<string, any>) {
    return this.execute('creditReferenceBureauAdvance', data);
  }

  creditReferenceBureauBusiness(data: Record<string, any>) {
    return this.execute('creditReferenceBureauBusiness', data);
  }

  creditReferenceBureau(data: Record<string, any>) {
    return this.execute('creditReferenceBureau', data);
  }

  driversLicense(data: Record<string, any>) {
    return this.execute('driversLicense', data);
  }

  kenyaBusinessVerification(data: Record<string, any>) {
    return this.execute('kenyaBusinessVerification', data);
  }

  mPesaStatementAnalysis(data: Record<string, any>) {
    return this.execute('mPesaStatementAnalysis', data);
  }

  nationalIdAdvance(data: Record<string, any>) {
    return this.execute('nationalIdAdvance', data);
  }

  nationalPassport(data: Record<string, any>) {
    return this.execute('nationalPassport', data);
  }

  phoneNumberAdvance(data: Record<string, any>) {
    return this.execute('phoneNumberAdvance', data);
  }

  phoneNumberBasic(data: Record<string, any>) {
    return this.execute('phoneNumberBasic', data);
  }

  pinChecker(data: Record<string, any>) {
    return this.execute('pinChecker', data);
  }

  psvLicense(data: Record<string, any>) {
    return this.execute('psvLicense', data);
  }

  serialNumber(data: Record<string, any>) {
    return this.execute('serialNumber', data);
  }

  tccChecker(data: Record<string, any>) {
    return this.execute('tccChecker', data);
  }

  whtChecker(data: Record<string, any>) {
    return this.execute('whtChecker', data);
  }

}
