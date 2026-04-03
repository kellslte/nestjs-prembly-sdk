import { DynamicModule, Module } from '@nestjs/common';
import {
  DEFAULT_MAX_RETRY_DELAY,
  DEFAULT_RETRIES,
  DEFAULT_RETRY_DELAY,
  DEFAULT_TIMEOUT,
  PREMBLY_API_BASE_URL,
  PREMBLY_MODULE_OPTIONS,
} from './constants';
import { PremblyModuleAsyncOptions, PremblyModuleOptions } from './interfaces';
import { PremblyService } from './prembly.service';

@Module({})
export class PremblyModule {
  static forRoot(options: PremblyModuleOptions): DynamicModule {
    return {
      module: PremblyModule,
      providers: [
        {
          provide: PREMBLY_MODULE_OPTIONS,
          useValue: {
            baseUrl: PREMBLY_API_BASE_URL,
            timeout: DEFAULT_TIMEOUT,
            retries: DEFAULT_RETRIES,
            retryDelay: DEFAULT_RETRY_DELAY,
            maxRetryDelay: DEFAULT_MAX_RETRY_DELAY,
            ...options,
          },
        },
        PremblyService,
      ],
      exports: [PremblyService],
      global: true,
    };
  }

  static forRootAsync(options: PremblyModuleAsyncOptions): DynamicModule {
    return {
      module: PremblyModule,
      imports: options.imports || [],
      providers: [
        {
          provide: PREMBLY_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        PremblyService,
      ],
      exports: [PremblyService],
      global: true,
    };
  }
}
