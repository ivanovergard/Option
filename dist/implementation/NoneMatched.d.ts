import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
export declare class NoneMatched<T> implements IFilteredNone<T>, IFilteredNoneActionable<T> {
    do(action: () => void): IActionable<T>;
    mapTo<TResult>(mapping: () => TResult): IMapped<T, TResult>;
}
