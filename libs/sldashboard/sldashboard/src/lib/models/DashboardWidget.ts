import { Type } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardDataSource } from './DashboardDataSource';

import { WidgetConfig } from './WidgetConfig';
export class DashboardWidget {


  IdComponent: number;
  Icon: string;
  Name: string;
  Description: string;
  Config: WidgetConfig;
  Data: any;
  DataSource: DashboardDataSource | undefined

  component: Type<any>;
  Configcomponent: Type<any>;
  constructor(component: Type<any>, configcomponent: Type<any>, IdComponent: number,  Icon: string,  Name: string,  Description: string,  Defaultconfig: WidgetConfig) { //, idComponent:number, Name: string, Description: string,  data: unknown) {
    this.component = component;
    this.IdComponent = IdComponent;
    this.Icon = Icon;
    this.Name = Name;
    this.Description = Description;
    this.Config = Defaultconfig;
    this.Configcomponent = configcomponent

  }

  clone(config:  WidgetConfig): DashboardWidget {
    return new DashboardWidget(
      this.component,
      this.Configcomponent,
      this.IdComponent,
      this.Icon,
      this.Name,
      this.Description,
      config
      )

  }
  cloneConfig(e: WidgetConfig | null= null): WidgetConfig{
    if (e)  {
      const w = e.widget;
      e.widget = undefined;
      const ret = JSON.parse(JSON.stringify(e))
      e.widget = w;
      return ret;

    } else {
      const ret = JSON.parse(JSON.stringify(this.Config))
      return ret;
    }
  }
}


