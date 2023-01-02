import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { SharedModule } from './shared.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './ObjectStoreConfig';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { ManagersService } from './services/managers.service';
import { RegionService } from './services/region.service';
import { AreeService } from './services/aree.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
