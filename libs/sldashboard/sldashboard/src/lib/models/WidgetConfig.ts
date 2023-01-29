import { Subject } from "rxjs";
import { WidgetElement } from "./widgetElement";

export interface WidgetConfig {

    IdItem: number;
    IdComponent: number;
    Top: number;
    Left: number;
    width: number;
    height: number;
    Title: string;
    CustomData: any;
    BackgroundColor: string;
    widget?: WidgetElement;

}
