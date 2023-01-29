import { Subject } from "rxjs";

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
    Changed$?: Subject<WidgetConfig>;

}
