import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, DB_CONFIG } from './models/DBConfig';
import { sldbService } from './services/sl-db.service';

@NgModule({
  imports: [CommonModule],
})
export class sldbModule {
  constructor(@Optional() @SkipSelf() parentModule?: sldbModule) {
    if (parentModule) {
      throw new Error(
        'sldbModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(config?: DBConfig): ModuleWithProviders<sldbModule> {
    return {
      ngModule: sldbModule,
      providers: [sldbService, {provide: DB_CONFIG, useValue: config}]
    };
  }
}
