import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SllayoutModule } from '@soloud/sllayout';
import { SlmenuModule } from '@soloud/slmenu';
import { SharedModule } from './shared.module';
import { dbConfig } from './ObjectStoreConfig';
import { HttpClientModule } from '@angular/common/http';
import { SlDbModule } from '@soloud/SlDb';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    SllayoutModule,
    SlmenuModule,
    SharedModule,
    HttpClientModule,
    SlDbModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
