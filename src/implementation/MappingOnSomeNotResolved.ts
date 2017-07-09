import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { SomeMatchedForMapping } from "./SomeMatchedForMapping";
import { SomeNotMatchedForMapping } from "./SomeNotMatchedForMapping";
import { SomeNotMatchedAsNoneForMapping } from "./SomeNotMatchedAsNoneForMapping";

export class MappingOnSomeNotResolved<T, TResult> implements IMapped<T, TResult> {
        
    constructor(private value: T) {  }
    
    when(predicate: (value: T) => boolean): IFilteredMapped<T, TResult> {
        return predicate(this.value) ?
            new SomeMatchedForMapping<T, TResult>(this.value) 
            : new SomeNotMatchedForMapping<T, TResult>(this.value);
    }

    whenSome(): IFilteredMapped<T, TResult> {
        return new SomeMatchedForMapping<T, TResult>(this.value);
    }

    whenNone(): IFilteredNoneMapped<T, TResult> {
        return new SomeNotMatchedAsNoneForMapping<T, TResult>(this.value);
    }

    map(): TResult {
        throw new Error("Invalid Operation");
    }
}