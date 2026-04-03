const fs = require('fs');
const path = require('path');

const catalog = require('./catalog-source.json');

const COUNTRY_GROUPS = {
  brazil: ['phone-number-check-copy-8'],
  canada: ['canada-1'],
  china: [
    'business-search-basic',
    'business-search',
    'company-search-lite-copy-1',
    'china-government-id-verification',
    'china-passport-verification',
    'get-company-number-china',
    'china-phone-number-verification',
  ],
  coteDIvoire: ['company-search-1', 'national-identity-number', 'resident-identity-number'],
  cyprus: ['phone-number-check-copy-3'],
  czechRepublic: ['company-search-basic-3'],
  gambia: ['waec-verification-copy-7'],
  ghana: [
    'drivers-license-4',
    'meter-number',
    'meter-payment-history',
    'post_identitypass-verification-gh-passport',
    'phone-number-basic',
    'tax-identification-number-1',
    'waec-verification-copy-5',
    'business-ubo',
  ],
  germany: ['phone-number-check-copy-5'],
  greece: ['basic-company-search-2'],
  hongKong: [
    'business-search-basic-copy-1',
    'business-search-copy-copy',
    'company-search-lite-copy-11',
    'get-company-number-china-copy',
  ],
  india: [
    'business-search-basic-copy-5',
    'business-search-advance-copy-16',
    'company-search-lite-copy-15',
    'get-company-number-korea-copy',
    'phone-number-check-copy-6',
  ],
  indonesia: ['phone-number-search-1'],
  japan: [
    'business-search-basic-copy-4',
    'business-search-advance-copy-12',
    'company-search-lite-copy-13',
    'get-company-number-taiwan-copy',
  ],
  kenya: [
    'alien-id',
    'bank-account',
    'credit-reference-bureau-advance',
    'credit-reference-bureau-business',
    'credit-reference-bureau',
    'drivers-license-3',
    'business-registration-service',
    'm-pesa-statement-analysis',
    'national-id-advance',
    'national-passport',
    'phone-number-check-copy-1',
    'phone-number-basic-3',
    'pin-checker',
    'psv-license-1',
    'serial-number',
    'tcc-checker',
    'wht-checker',
  ],
  korea: [
    'business-search-basic-copy-3',
    'business-search-advance-copy-13',
    'company-search-lite-copy-14',
    'get-company-number-japan-copy',
  ],
  liberia: ['waec-verification-copy-6'],
  malawi: ['tin-tax-identification-number', 'phone-number-1', 'business-verification-ubo'],
  malaysia: ['credit-bureau-copy-2'],
  malta: ['phone-number-check-copy-7'],
  mexico: ['basic-company-search-1'],
  netherlands: ['phone-number-status-check'],
  newZealand: [
    'business-search-copy-1',
    'business-search-advance-copy-14',
    'company-search-lite-copy-16',
    'get-company-number-india-copy',
  ],
  nigeria: [
    'account-with-name-comparism',
    'address-verification-1',
    'address-verification-status',
    'advance-cac-1',
    'advance-drivers-license',
    'advance-phone-number-1',
    'account-number-10-1',
    'basic-cac-1',
    'basic-phone-number-1',
    'address-verification-copy-1',
    'bvn-advance',
    'bvn-basic',
    'bvn-face-validation',
    'credit-bureau-commercialbusiness-basic',
    'credit-bureau-consumerindividual-basic',
    'credit-bureau-commercialbusiness-advance',
    'credit-bureau-consumer',
    'drivers-license-face-validation',
    'drivers-license-image',
    'drivers-license-v2-1',
    'get-bvn-with-phone-number-1',
    'get-tin-with-phone-number',
    'financial-accounts-advance-1',
    'insurance-policy-1',
    'international-passport',
    'international-passport-face-validation',
    'post_identitypass-verification-national-passport-image',
    'get_identitypass-verification-bank-account-bank-code',
    'national-id-basic',
    'nin-basic',
    'nin-with-face',
    'nin-and-virtual-nin',
    'passport-version-2',
    'plate-number-verification',
    'stamp-duty',
    'tax-identification-number-tin',
    'voters-identification-number',
    'waec-verification-1',
    'scuml',
    'tcc',
    'metre-number',
    'nysc-1',
  ],
  portugal: ['phone-number-check-copy-2'],
  rwanda: ['tin', 'phone-number-verification', 'business-ubo-verification'],
  sierraLeone: [
    'post_identitypass-verification-sl-drivers-license',
    'national-id-3',
    'waec-verification-copy-4',
  ],
  singapore: [
    'business-search-basic-copy',
    'business-search-copy',
    'credit-bureau-2',
    'company-search-lite',
    'get-company-number-singapore',
  ],
  southAfrica: ['sim-verification'],
  switzerland: ['phone-number-check-copy-9'],
  taiwan: [
    'business-search-basic-copy-2',
    'business-search-advance-copy-11',
    'company-search-lite-copy-12',
    'get-company-number-hong-kong-copy',
  ],
  tanzania: [
    'business-check-1',
    'phone-number-basic-1',
    'identity-check',
    'voters-identification-number-verification-1',
    'zanzibar-residence-id-1',
  ],
  thailand: [
    'business-search-basic-copy-copy-1',
    'business-search-advance-copy-17',
    'company-search-lite-copy-18',
    'get-company-number-vietnam-copy',
  ],
  uganda: ['sim-verification-copy-1'],
  unitedKingdom: [
    'company-search-basic-1',
    'phone-number-check-copy',
    'phone-number-intelligence-1',
  ],
  unitedStatesOfAmerica: ['phone-number-check-copy-4'],
  vietnam: [
    'business-search-advance-copy-15',
    'business-search-basic-copy-copy',
    'company-search-lite-copy-17',
    'get-company-number-new-zealand-copy',
  ],
  zambia: ['national-id-1', 'phone-verification', 'tin-verification-1'],
  zimbabwe: ['tin-verification', 'phone-number-verification-1', 'business-verification-ubo-1'],
};

const fileSlugMap = {
  coteDIvoire: 'cote-divoire',
  czechRepublic: 'czech-republic',
  hongKong: 'hong-kong',
  newZealand: 'new-zealand',
  sierraLeone: 'sierra-leone',
  southAfrica: 'south-africa',
  unitedKingdom: 'united-kingdom',
  unitedStatesOfAmerica: 'united-states-of-america',
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function pascalCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => capitalize(part.toLowerCase()))
    .join('');
}

function camelCaseFromTitle(title) {
  const normalized = title
    .replace(/\+/g, ' Plus ')
    .replace(/&/g, ' And ')
    .replace(/\//g, ' ')
    .replace(/\((.*?)\)/g, ' $1 ')
    .replace(/-/g, ' ')
    .replace(/[^a-zA-Z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const parts = normalized.split(' ').filter(Boolean);
  return parts
    .map((part, index) => {
      const lower = part.toLowerCase();
      return index === 0 ? lower : capitalize(lower);
    })
    .join('');
}

function toMethod(entry) {
  const pathParamNames = [...entry.path.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]);
  const endpoint = entry.path.replace(/\{([^}]+)\}/g, ':id');
  return {
    name: camelCaseFromTitle(entry.title),
    method: entry.method,
    endpoint,
    hasPathParam: pathParamNames.length > 0,
  };
}

function renderMethodsArray(methods) {
  return JSON.stringify(methods, null, 2).replace(/"([^"]+)":/g, '$1:');
}

function renderService(countryKey, className, methods) {
  const lines = [];
  lines.push("import { PremblyModuleOptions } from '../../interfaces';");
  lines.push("import { BaseGeneratedService } from '../core/base-generated.service';");
  lines.push('');
  lines.push(`const METHODS = ${renderMethodsArray(methods)} as const;`);
  lines.push('');
  lines.push(`export class ${className} extends BaseGeneratedService {`);
  lines.push('  constructor(options: PremblyModuleOptions) {');
  lines.push('    super(options, METHODS);');
  lines.push('  }');
  lines.push('');

  for (const method of methods) {
    if (method.hasPathParam) {
      lines.push(`  ${method.name}(id: string | number, data?: Record<string, any>) {`);
      lines.push(`    return this.execute('${method.name}', id, data);`);
      lines.push('  }');
    } else if (method.method === 'get' || method.method === 'delete') {
      lines.push(`  ${method.name}(params?: Record<string, any>) {`);
      lines.push(`    return this.execute('${method.name}', params);`);
      lines.push('  }');
    } else {
      lines.push(`  ${method.name}(data: Record<string, any>) {`);
      lines.push(`    return this.execute('${method.name}', data);`);
      lines.push('  }');
    }
    lines.push('');
  }

  lines.push('}');
  return `${lines.join('\n')}\n`;
}

function renderInterface(className, methods) {
  const lines = [];
  lines.push("import { PremblyBaseResponse, PremblyRequestPayload } from '../common.interface';");
  lines.push('');
  for (const method of methods) {
    const typeBase = `${className}${capitalize(method.name)}`;
    lines.push(`export type ${typeBase}Request = PremblyRequestPayload;`);
    lines.push(`export type ${typeBase}Response = PremblyBaseResponse;`);
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function renderSpec(fileImportPath, className, methods) {
  const lines = [];
  lines.push(`import { ${className} } from '${fileImportPath}';`);
  lines.push('');
  lines.push(`describe('${className}', () => {`);
  lines.push(`  let service: ${className};`);
  lines.push('');
  lines.push('  beforeEach(() => {');
  lines.push(`    service = new ${className}({`);
  lines.push("      apiKey: 'test-api-key',");
  lines.push("      baseUrl: 'https://api.prembly.com',");
  lines.push('    });');
  lines.push('  });');
  lines.push('');
  lines.push("  it('should be defined', () => {");
  lines.push('    expect(service).toBeDefined();');
  lines.push('  });');
  lines.push('');

  for (const method of methods) {
    lines.push(`  describe('${method.name}', () => {`);
    lines.push(`    it('should call ${method.method} with the mapped endpoint', async () => {`);
    lines.push("      const mockResponse = { status: true, data: {} };");
    const spyTarget = method.method;
    lines.push(`      jest.spyOn(service as any, '${spyTarget}').mockResolvedValue(mockResponse);`);
    lines.push('');
    if (method.hasPathParam) {
      lines.push(`      const result = await service.${method.name}('test-id', { sample: true });`);
      lines.push('');
      lines.push(
        `      expect(service['${spyTarget}']).toHaveBeenCalledWith('${method.endpoint.replace(':id', 'test-id')}', { sample: true });`,
      );
    } else if (method.method === 'get' || method.method === 'delete') {
      lines.push(`      const result = await service.${method.name}({ sample: true });`);
      lines.push('');
      lines.push(
        `      expect(service['${spyTarget}']).toHaveBeenCalledWith('${method.endpoint}', { sample: true });`,
      );
    } else {
      lines.push(`      const result = await service.${method.name}({ sample: true });`);
      lines.push('');
      lines.push(
        `      expect(service['${spyTarget}']).toHaveBeenCalledWith('${method.endpoint}', { sample: true });`,
      );
    }
    lines.push('      expect(result).toEqual(mockResponse);');
    lines.push('    });');
    lines.push('  });');
    lines.push('');
  }

  lines.push('});');
  return `${lines.join('\n')}\n`;
}

function writeFile(targetPath, contents) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, contents);
}

const dataVerificationInterfaceExports = [];
const dataVerificationServiceImports = [];
const dataVerificationProperties = [];
const dataVerificationAssignments = [];

for (const [countryKey, slugs] of Object.entries(COUNTRY_GROUPS)) {
  const entries = slugs
    .map((slug) => catalog.find((item) => item.slug === slug))
    .filter(Boolean)
    .map(toMethod);
  const fileSlug = fileSlugMap[countryKey] || countryKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
  const classBase = pascalCase(countryKey);
  const className = `${classBase}DataVerificationService`;

  writeFile(
    path.join(__dirname, '..', 'src', 'services', 'data-verification', `${fileSlug}.service.ts`),
    renderService(countryKey, className, entries),
  );
  writeFile(
    path.join(
      __dirname,
      '..',
      'src',
      'interfaces',
      'data-verification',
      `${fileSlug}.interface.ts`,
    ),
    renderInterface(className, entries),
  );
  writeFile(
    path.join(
      __dirname,
      '..',
      'test',
      'services',
      'data-verification',
      `${fileSlug}.service.spec.ts`,
    ),
    renderSpec(`../../../src/services/data-verification/${fileSlug}.service`, className, entries),
  );

  dataVerificationInterfaceExports.push(`export * from './${fileSlug}.interface';`);
  dataVerificationServiceImports.push(
    `import { ${className} } from './${fileSlug}.service';`,
  );
  dataVerificationProperties.push(`  public readonly ${countryKey}: ${className};`);
  dataVerificationAssignments.push(`    this.${countryKey} = new ${className}(options);`);
}

writeFile(
  path.join(__dirname, '..', 'src', 'interfaces', 'data-verification', 'index.ts'),
  `${dataVerificationInterfaceExports.join('\n')}\n`,
);

writeFile(
  path.join(__dirname, '..', 'src', 'services', 'data-verification', 'data-verification.service.ts'),
  [
    "import { PremblyModuleOptions } from '../../interfaces';",
    ...dataVerificationServiceImports,
    '',
    'export class DataVerificationService {',
    ...dataVerificationProperties,
    '',
    '  constructor(options: PremblyModuleOptions) {',
    ...dataVerificationAssignments,
    '  }',
    '}',
    '',
  ].join('\n'),
);

console.log(`generated ${Object.keys(COUNTRY_GROUPS).length} data verification services`);
