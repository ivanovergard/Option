import { IFilteredActionable } from "./IFilteredActionable";
import { IMapped } from "./IMapped";

export interface IFiltered<T> extends IFilteredActionable<T> {
    mapTo<TResult>(mapping: (value: T) => TResult) : IMapped<T, TResult>;
}