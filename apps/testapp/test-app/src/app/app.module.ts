import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SllayoutModule } from '@soloud/sllayout';
import { SlmenuModule } from '@soloud/slmenu';
import { SharedModule } from './shared.module';
import { dbConfig } from './ObjectStoreConfig';
import { HttpClientModule } from '@angular/common/http';
import { sldbModule } from '@soloud/sldb';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    SllayoutModule,
    SlmenuModule,
    SharedModule,
    HttpClientModule,
    sldbModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
