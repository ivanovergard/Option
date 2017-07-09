import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IMapped } from "../interfaces/IMapped";
export declare class SomeNotMatchedForMapping<T, TResult> implements IFilteredMapped<T, TResult> {
    private value;
    constructor(value: T);
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
