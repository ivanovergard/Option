import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { IFiltered } from "../interfaces/IFiltered";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
export declare class SomeNotMatched<T> implements IFiltered<T>, IFilteredNoneActionable<T> {
    private value;
    constructor(value: T);
    do(action: (value: T) => void): IActionable<T>;
    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
