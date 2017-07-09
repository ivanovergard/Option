import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
export declare class SomeNotMatchedAsNone<T> implements IFilteredNone<T> {
    private value;
    constructor(value: T);
    do(action: () => void): IActionable<T>;
    mapTo<TResult>(mapping: () => TResult): IMapped<T, TResult>;
}
