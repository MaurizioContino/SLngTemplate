import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlRoundedButtonComponent } from './rounded-button/rounded-button.component';
import { ButtonColorPickerComponent } from './button-color-picker/button-color-picker.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [CommonModule, FormsModule, NgSelectModule],
    declarations: [SlRoundedButtonComponent, ButtonColorPickerComponent],
    exports: [SlRoundedButtonComponent, ButtonColorPickerComponent],
})
export class SlButtonModule {}
