export interface ServiceMethodDefinition {
  name: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  endpoint: string;
  hasPathParam?: boolean;
  description?: string;
}

export interface ServiceGroupDefinition {
  className: string;
  propertyName: string;
  interfacePath: string;
  servicePath: string;
  specPath: string;
  methods: ServiceMethodDefinition[];
}
