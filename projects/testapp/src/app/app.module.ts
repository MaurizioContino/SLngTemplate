import { NgModule, isDevMode, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { SharedModule } from './shared.module';
import { dbConfig } from './ObjectStoreConfig';
import { NgSlDbModule, NgSlDbService } from 'projects/ng-sl-db/src/public-api';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgSlDbModule.forRoot(dbConfig),

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
