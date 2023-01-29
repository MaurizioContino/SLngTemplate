import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sl-color-picker',
    templateUrl: './button-color-picker.component.html',
    styleUrls: ['./button-color-picker.component.scss'],
})
export class ButtonColorPickerComponent {
    private _Value = '';

    @Input() Field = 'Principale';
    @Input() RightFields = [''];

    @Input()
    public get Value() {
        return this.Compose;
    }
    public set Value(value) {
        this._Value = value;
        const v = value.split(':');
        if (v.length > 1) {
            if (v[0] == 'direct') {
                this.tipo == 'direct';
                this.SelectedColor = v[1];
            } else {
                if (v.length > 3) {
                    {
                        this.tipo == 'formula';
                        this.SelectedColor = v[1];
                        this.Comparer = v[2];
                        this.SelectedField = v[3];
                    }
                }
            }
        }
    }
    @Output() ValueChange = new EventEmitter<string>();

    SelectedColor: any;
    Comparer: any;
    SelectedField: any;

    Comparers = ['=', '<', '>', '<=', '>=', '<>'];
    viewconfig = false;
    tipo = 'direct';

    get Compose(): string {
        let ret = '';
        if (this.SelectedColor) {
            if (this.tipo == 'direct') {
                ret = 'direct:' + this.SelectedColor;
            } else {
                ret = 'formula:' + this.SelectedColor + ':' + this.Comparer + ':' + this.SelectedField;
            }
            return ret;
        } else {
            return '';
        }
    }

    selected() {
        this.ValueChange.emit(this.Compose);
        this.viewconfig = false;
    }

    get isFormula() {
        return this.Compose.indexOf('formula') > -1;
    }
    get Color() {
        const v = this.Compose;
        if (v.indexOf(':') > -1) {
            return this.Compose.split(':')[1];
        } else {
            return 'black';
        }
    }
    cancel() {
        this.viewconfig = false;
    }
    get frontColor() {
        const color = this.Color.charAt(0) === '#' ? this.Color.substring(1, 7) : this.Color;
        const r = parseInt(color.substring(0, 2), 16); // hexToR
        const g = parseInt(color.substring(2, 4), 16); // hexToG
        const b = parseInt(color.substring(4, 6), 16); // hexToB
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';
    }
}
