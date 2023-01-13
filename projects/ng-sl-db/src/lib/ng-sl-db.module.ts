import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
//import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { HttpClientModule} from '@angular/common/http';



import { DBConfig, DB_CONFIG } from './DBConfig';
import { NgSlDbService } from 'ng-sl-db';





@NgModule({
  declarations: [
  ],
  imports: [

    HttpClientModule
  ],
  exports: [
  ]
})
export class NgSlDbModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgSlDbModule) {
    if (parentModule) {
      throw new Error(
        'NgSlDbModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(config?: DBConfig): ModuleWithProviders<NgSlDbModule> {
    return {
      ngModule: NgSlDbModule,
      providers: [NgSlDbService, {provide: DB_CONFIG, useValue: config}]
    };
  }

}
