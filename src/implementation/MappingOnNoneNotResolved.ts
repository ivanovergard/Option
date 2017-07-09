import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { NoneNotMatchedForMapping } from "./NoneNotMatchedForMapping";
import { NoneMatchedForMapping } from "./NoneMatchedForMapping";

export class MappingOnNoneNotResolved<T, TResult> implements IMapped<T, TResult> {

    when(predicate: (value:T) => boolean) {
        return new NoneNotMatchedForMapping<T, TResult>();
    }
    
    whenSome(): IFilteredMapped<T, TResult> {
        return new NoneNotMatchedForMapping<T, TResult>();
    }

    whenNone(): IFilteredNoneMapped<T, TResult> {
        return new NoneMatchedForMapping<T, TResult>();
    }

    map(): TResult {
        throw new Error("Invalid operation");
    }

}