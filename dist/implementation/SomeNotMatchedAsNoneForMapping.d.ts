import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { IMapped } from "../interfaces/IMapped";
export declare class SomeNotMatchedAsNoneForMapping<T, TResult> implements IFilteredNoneMapped<T, TResult> {
    private value;
    constructor(value: T);
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
