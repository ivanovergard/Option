import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
export declare class MappingOnSomeNotResolved<T, TResult> implements IMapped<T, TResult> {
    private value;
    constructor(value: T);
    when(predicate: (value: T) => boolean): IFilteredMapped<T, TResult>;
    whenSome(): IFilteredMapped<T, TResult>;
    whenNone(): IFilteredNoneMapped<T, TResult>;
    map(): TResult;
}
