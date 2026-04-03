import { PremblyBaseResponse, PremblyQueryParams, PremblyRequestPayload } from './common.interface';

export type GetWalletBalanceResponse = PremblyBaseResponse;
export type GetVerificationStatusRequest = PremblyQueryParams;
export type GetVerificationStatusResponse = PremblyBaseResponse;
export type VerifyVinOrChassisRequest = PremblyRequestPayload;
export type VerifyVinOrChassisResponse = PremblyBaseResponse;
export type GetSdkSessionRequest = PremblyQueryParams;
export type GetSdkSessionResponse = PremblyBaseResponse;
