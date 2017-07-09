import { IMapped } from "./IMapped";
export interface IFilteredMapped<T, TResult> {
    mapTo(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
