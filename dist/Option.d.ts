import { IFiltered } from "./interfaces/IFiltered";
import { IFilteredNone } from "./interfaces/IFilteredNone";
export declare class Option<T> {
    private contents;
    private constructor();
    static some<T>(value: T): Option<T>;
    static none<T>(): Option<T>;
    when(action: (value: T) => boolean): IFiltered<T>;
    whenSome(): IFiltered<T>;
    whenNone(): IFilteredNone<T>;
}
