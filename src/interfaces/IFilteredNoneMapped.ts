import { IMapped } from "./IMapped";

export interface IFilteredNoneMapped<T, TResult> {
    mapTo(mapping: (value: T) => TResult) : IMapped<T, TResult>
}