import { TemplateRef } from "@angular/core";

export interface layoutsection {

  name: string;
  sizing: 'extend' | 'fixed' | 'fullcontainer' | 'fullscreen'
  width?: string;
  height?: string;
  view?: 'inline' | 'popup' | 'none';
  collapsible?: boolean;
  collapsed?: boolean;
  template: TemplateRef<any> | null;
}
