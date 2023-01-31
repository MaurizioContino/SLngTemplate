import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeekPickerComponent } from './week-picker/week-picker.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
    imports: [CommonModule, FormsModule, InputTextModule,
      ButtonModule, OverlayPanelModule, CalendarModule],
    declarations: [WeekPickerComponent, ],
    exports: [WeekPickerComponent],
    providers: [DatePipe],
})
export class SlCommonControlsModule {


}
