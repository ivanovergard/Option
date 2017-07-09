import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IMapped } from "../interfaces/IMapped";
export declare class NoneNotMatchedForMapping<T, TResult> implements IFilteredNoneMapped<T, TResult>, IFilteredMapped<T, TResult> {
    mapTo(mapping: (value?: T) => TResult): IMapped<T, TResult>;
}
