import { IFilteredMapped } from "./IFilteredMapped";
import { IFilteredNoneMapped } from "./IFilteredNoneMapped";
export interface IMapped<T, TResult> {
    when(predicate: (value: T) => boolean): IFilteredMapped<T, TResult>;
    whenSome(): IFilteredMapped<T, TResult>;
    whenNone(): IFilteredNoneMapped<T, TResult>;
    map(): TResult;
}
