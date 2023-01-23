import { Subject } from "rxjs";

export interface IDataservice {
    Load(reload: boolean): void;
    Dataset: any[]
    Dataset$: Subject<any[]>
}