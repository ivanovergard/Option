import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { IMapped } from "../interfaces/IMapped";
export declare class NoneMatchedForMapping<T, TResult> implements IFilteredNoneMapped<T, TResult> {
    mapTo(mapping: () => TResult): IMapped<T, TResult>;
}
