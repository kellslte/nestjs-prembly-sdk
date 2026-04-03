import { PremblyBaseResponse, PremblyQueryParams, PremblyRequestPayload } from './common.interface';

export type FaceScanRequest = PremblyRequestPayload;
export type FaceScanResponse = PremblyBaseResponse;
export type IdScanRequest = PremblyRequestPayload;
export type IdScanResponse = PremblyBaseResponse;
export type SubmitFraudReportRequest = PremblyRequestPayload;
export type SubmitFraudReportResponse = PremblyBaseResponse;
export type GetFraudReportDetailResponse = PremblyBaseResponse;
export type ListFraudReportsRequest = PremblyQueryParams;
export type ListFraudReportsResponse = PremblyBaseResponse;
export type ListBulkScansRequest = PremblyQueryParams;
export type ListBulkScansResponse = PremblyBaseResponse;
export type GetBulkScanDetailResponse = PremblyBaseResponse;
export type BulkScanUploadRequest = PremblyQueryParams;
export type BulkScanUploadResponse = PremblyBaseResponse;
