import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, DB_CONFIG } from './models/DBConfig';
import { SlDbService } from './services/sl-db.service';

@NgModule({
  imports: [CommonModule],
})
export class SlDbModule {
  constructor(@Optional() @SkipSelf() parentModule?: SlDbModule) {
    if (parentModule) {
      throw new Error(
        'SlDbModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(config?: DBConfig): ModuleWithProviders<SlDbModule> {
    return {
      ngModule: SlDbModule,
      providers: [SlDbService, {provide: DB_CONFIG, useValue: config}]
    };
  }
}
