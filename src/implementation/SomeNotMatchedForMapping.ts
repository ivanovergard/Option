import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IMapped } from "../interfaces/IMapped";
import { MappingOnSomeNotResolved } from "./MappingOnSomeNotResolved";

export class SomeNotMatchedForMapping<T, TResult> implements IFilteredMapped<T, TResult> {
    
    constructor(private value: T) { }
    
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult> {
        return new MappingOnSomeNotResolved<T, TResult>(this.value)
    }

}