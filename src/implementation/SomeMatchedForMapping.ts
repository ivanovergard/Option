import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IMapped } from "../interfaces/IMapped";
import { MappingResolved } from "./MappingResolved";

export class SomeMatchedForMapping<T, TResult> implements IFilteredMapped<T, TResult> {

    constructor(private value: T) { }

    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult> {
        return new MappingResolved<T, TResult>(mapping(this.value));
    }
    
}