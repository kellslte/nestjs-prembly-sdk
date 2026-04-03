# @scwar/nestjs-prembly-sdk

A comprehensive NestJS module for integrating with the Prembly API. This package has a shared HTTP core, typed Nest module setup, grouped domain services, and country-specific data-verification services.

## Features

- Broad Prembly API coverage across core verification, fraud, background-check, and country-specific endpoints
- NestJS-friendly `PremblyModule.forRoot()` and `forRootAsync()` configuration
- Shared HTTP client with retries, timeout handling, and typed error wrapping
- Top-level grouped services with nested `backgroundCheck` and `dataVerification` domains
- Generated country service files and specs from a harvested Prembly endpoint catalog

## Installation

```bash
npm install @scwar/nestjs-prembly-sdk
```

## Quick Start

```ts
import { Module } from '@nestjs/common';
import { PremblyModule } from '@scwar/nestjs-prembly-sdk';

@Module({
  imports: [
    PremblyModule.forRoot({
      apiKey: process.env.PREMBLY_API_KEY!,
      appId: process.env.PREMBLY_APP_ID!,
    }),
  ],
})
export class AppModule {}
```

```ts
import { Injectable } from '@nestjs/common';
import { PremblyService } from '@scwar/nestjs-prembly-sdk';

@Injectable()
export class IdentityService {
  constructor(private readonly prembly: PremblyService) {}

  verifyBvn(number: string) {
    return this.prembly.dataVerification.nigeria.bvnBasic({ number });
  }

  checkPep(name: string) {
    return this.prembly.amlScreening.pepAndSanction({ name });
  }
}
```

## Configuration

```ts
interface PremblyModuleOptions {
  apiKey: string;
  appId: string;
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  maxRetryDelay?: number;
}
```

## Service Layout

- `prembly.general`
- `prembly.globalBusinessVerification`
- `prembly.amlScreening`
- `prembly.multipleCountriesCheck`
- `prembly.globalDocumentVerification`
- `prembly.biometrics`
- `prembly.backgroundCheck.candidate`
- `prembly.backgroundCheck.package`
- `prembly.backgroundCheck.configuration`
- `prembly.dataVerification.<country>`
- `prembly.transactionMonitoring`
- `prembly.fraudScan`

## Scripts

```bash
npm run generate:sdk
npm run build
npm test
```

## Notes

- The SDK uses Prembly auth headers `x-api-key` and `app-id`.
- The large country-specific verification surface is generated from a local endpoint catalog in [`scripts/catalog-source.json`](./scripts/catalog-source.json).
- Some Prembly reference pages expose inconsistent titles and path shapes; the generator preserves the harvested endpoints and normalizes method names for ergonomic Nest usage.
