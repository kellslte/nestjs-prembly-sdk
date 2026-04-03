export interface PremblyVerificationMeta {
  reference?: string;
  [key: string]: any;
}

export interface PremblyBaseResponse<T = any> {
  status: boolean;
  message?: string;
  detail?: string;
  response_code?: string;
  data?: T;
  verification?: PremblyVerificationMeta;
  [key: string]: any;
}

export interface PremblyPaginatedResponse<T = any> extends PremblyBaseResponse<T[]> {
  page?: number;
  per_page?: number;
  total?: number;
  next?: string | null;
  previous?: string | null;
}

export type PremblyRequestPayload = Record<string, any>;
export type PremblyQueryParams = Record<string, string | number | boolean | undefined | null>;
