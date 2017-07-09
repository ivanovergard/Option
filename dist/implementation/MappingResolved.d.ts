import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
export declare class MappingResolved<T, TResult> implements IMapped<T, TResult>, IFilteredMapped<T, TResult>, IFilteredNoneMapped<T, TResult> {
    private result;
    constructor(result: TResult);
    when(predicate: (value: T) => boolean): IFilteredMapped<T, TResult>;
    whenSome(): IFilteredMapped<T, TResult>;
    whenNone(): IFilteredNoneMapped<T, TResult>;
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult>;
    map(): TResult;
}
