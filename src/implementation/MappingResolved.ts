import { IMapped } from "../interfaces/IMapped";
import { IFilteredMapped } from "../interfaces/IFilteredMapped";
import { IFilteredNoneMapped } from "../interfaces/IFilteredNoneMapped";

export class MappingResolved<T, TResult> implements IMapped<T, TResult>, IFilteredMapped<T, TResult>, IFilteredNoneMapped<T, TResult> {

    constructor(private result: TResult) { }

    when(predicate: (value: T) => boolean): IFilteredMapped<T, TResult> {
        return this;
    }
    whenSome(): IFilteredMapped<T, TResult> {
        return this;
    }
    whenNone(): IFilteredNoneMapped<T, TResult> {
        return this;
    }
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult> {
        return this;
    }
    map(): TResult {
        return this.result;
    }

}