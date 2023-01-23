import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlRoundedButtonComponent } from './rounded-button/rounded-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SlRoundedButtonComponent],
  exports:[
    SlRoundedButtonComponent
  ]
})
export class SlButtonModule {}
