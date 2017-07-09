import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";
import { IMapped } from "../interfaces/IMapped";
import { MappingResolved } from "./MappingResolved";

export class NoneMatchedForMapping<T, TResult> implements IFilteredNoneMapped<T, TResult> {
    
    mapTo(mapping: () => TResult): IMapped<T, TResult> {
        return new MappingResolved<T, TResult>(mapping());
    }

}