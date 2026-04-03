import { PremblyBaseResponse, PremblyQueryParams, PremblyRequestPayload } from '../common.interface';

export type ListSystemPackagesRequest = PremblyQueryParams;
export type ListSystemPackagesResponse = PremblyBaseResponse;
export type GetSystemPackageDetailResponse = PremblyBaseResponse;
export type ListCustomPackagesRequest = PremblyQueryParams;
export type ListCustomPackagesResponse = PremblyBaseResponse;
export type CreateCustomPackageRequest = PremblyRequestPayload;
export type CreateCustomPackageResponse = PremblyBaseResponse;
export type GetCustomPackageDetailResponse = PremblyBaseResponse;
export type UpdateCustomPackageRequest = PremblyRequestPayload;
export type UpdateCustomPackageResponse = PremblyBaseResponse;
export type DeleteCustomPackageResponse = PremblyBaseResponse;
