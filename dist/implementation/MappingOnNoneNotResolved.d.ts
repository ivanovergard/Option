import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { NoneNotMatchedForMapping } from "./NoneNotMatchedForMapping";
export declare class MappingOnNoneNotResolved<T, TResult> implements IMapped<T, TResult> {
    when(predicate: (value: T) => boolean): NoneNotMatchedForMapping<T, TResult>;
    whenSome(): IFilteredMapped<T, TResult>;
    whenNone(): IFilteredNoneMapped<T, TResult>;
    map(): TResult;
}
