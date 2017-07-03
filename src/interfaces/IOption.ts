import { IFiltered } from "src/interfaces/IFiltered";
import { IFilteredNone } from "src/interfaces/IFilteredNone";

export interface IOption<T> {
    when(action: (value:T) => boolean) : IFiltered<T>;
    whenSome(): IFiltered<T>;
    whenNone(): IFilteredNone<T>;
}