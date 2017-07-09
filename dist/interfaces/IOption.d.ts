import { IFiltered } from "./IFiltered";
import { IFilteredNone } from "./IFilteredNone";
export interface IOption<T> {
    when(action: (value: T) => boolean): IFiltered<T>;
    whenSome(): IFiltered<T>;
    whenNone(): IFilteredNone<T>;
}
