import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { IMapped } from "../interfaces/IMapped";
import { MappingOnSomeNotResolved } from "./MappingOnSomeNotResolved";

export class SomeNotMatchedAsNoneForMapping<T, TResult> implements IFilteredNoneMapped<T, TResult> {
    
    constructor(private value: T) {}

    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult> {
        return new MappingOnSomeNotResolved<T, TResult>(this.value);
    }

}