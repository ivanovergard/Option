import { IMapped } from "./IMapped";

export interface IFilteredNoneMapped<T, TResult> {
    mapTo(mapping: () => TResult) : IMapped<T, TResult>
}