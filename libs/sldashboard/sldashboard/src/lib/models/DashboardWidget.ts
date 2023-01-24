import { Type } from '@angular/core';
import { WidgetConfig } from './WidgetConfig';
import { WidgetStatus } from './WidgetStatus';
export class DashboardWidget {
  
  status: WidgetStatus = WidgetStatus.view
  
  IdComponent: number;
  Icon: string;
  Name: string;
  Description: string;
  config: WidgetConfig;
  

  component: Type<any>;

  constructor(component: Type<any>, IdComponent: number,  Icon: string,  Name: string,  Description: string,  Defaultconfig: WidgetConfig) { //, idComponent:number, Name: string, Description: string,  data: unknown) {
    this.component = component;
    this.IdComponent = IdComponent;
    this.Icon = Icon;
    this.Name = Name;
    this.Description = Description;
    this.config = Defaultconfig;
  
  }
}


