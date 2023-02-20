import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { HMasterDetailsComponent } from './components/hmaster-details/hmaster-details.component';
import { RouterModule } from '@angular/router';
import { SlBigHeaderComponent } from './components/sl-big-header/sl-big-header.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SlSmallHeaderComponent } from './components/sl-small-header/sl-small-header.component';
import { SlCardComponent } from './components/sl-card/sl-card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemDirective } from './components/accordion/accordionitem.directive';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import { AccordionBodyDirective } from './components/accordion/accordionbody.directive';
import { AccordionTitleDirective } from './components/accordion/accordiontitle.directive';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
    declarations: [DefaultLayoutComponent, EmptyLayoutComponent, HMasterDetailsComponent,
      SlBigHeaderComponent, SlSmallHeaderComponent, SlCardComponent, AccordionComponent, AccordionItemComponent,
       AccordionItemDirective, AccordionBodyDirective, AccordionTitleDirective],
    imports: [CommonModule, RouterModule,  NgScrollbarModule, ButtonModule,AvatarModule],
    exports: [DefaultLayoutComponent, EmptyLayoutComponent, HMasterDetailsComponent, SlBigHeaderComponent,
      SlSmallHeaderComponent, SlCardComponent, AccordionComponent, AccordionItemComponent,
      AccordionItemDirective, AccordionBodyDirective, AccordionTitleDirective ],
})
export class SllayoutModule {}
