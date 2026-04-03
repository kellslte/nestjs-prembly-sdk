import { BaseService } from '../../base.service';
import {
  PremblyBaseResponse,
  PremblyModuleOptions,
  PremblyQueryParams,
  PremblyRequestPayload,
  ServiceMethodDefinition,
} from '../../interfaces';

export abstract class BaseGeneratedService extends BaseService {
  constructor(
    options: PremblyModuleOptions,
    protected readonly methods: ReadonlyArray<ServiceMethodDefinition>,
  ) {
    super(options);
  }

  protected execute(
    methodName: string,
    payloadOrId?: PremblyRequestPayload | string | number,
    query?: PremblyQueryParams,
  ): Promise<PremblyBaseResponse> {
    const definition = this.methods.find((item) => item.name === methodName);

    if (!definition) {
      throw new Error(`Unknown service method definition: ${methodName}`);
    }

    let endpoint = definition.endpoint;
    let body: PremblyRequestPayload | undefined;

    if (definition.hasPathParam) {
      endpoint = endpoint.replace(':id', encodeURIComponent(String(payloadOrId)));
      body = query as PremblyRequestPayload | undefined;
    } else if (definition.method === 'get' || definition.method === 'delete') {
      body = undefined;
      query = payloadOrId as PremblyQueryParams | undefined;
    } else {
      body = payloadOrId as PremblyRequestPayload | undefined;
    }

    switch (definition.method) {
      case 'get':
        return this.get<PremblyBaseResponse>(endpoint, query);
      case 'post':
        return this.post<PremblyBaseResponse>(endpoint, body);
      case 'put':
        return this.put<PremblyBaseResponse>(endpoint, body);
      case 'patch':
        return this.patch<PremblyBaseResponse>(endpoint, body);
      case 'delete':
        return this.delete<PremblyBaseResponse>(endpoint);
      default:
        throw new Error(`Unsupported HTTP method: ${definition.method}`);
    }
  }
}
