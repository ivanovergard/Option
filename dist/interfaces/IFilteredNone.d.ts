import { IActionable } from "./IActionable";
import { IMapped } from "../interfaces/IMapped";
export interface IFilteredNone<T> {
    do(action: () => void): IActionable<T>;
    mapTo<TResult>(mapping: () => TResult): IMapped<T, TResult>;
}
