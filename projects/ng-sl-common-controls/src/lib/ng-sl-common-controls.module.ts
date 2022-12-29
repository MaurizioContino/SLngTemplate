import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';




@NgModule({
  declarations: [
    SearchBarComponent,
    RoundedButtonComponent
  ],
  imports: [

  ],
  exports: [
    SearchBarComponent,
    RoundedButtonComponent
  ]
})
export class NgSlCommonControlsModule { }
