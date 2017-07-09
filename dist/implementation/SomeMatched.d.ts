import { IActionable } from "../interfaces/IActionable";
import { IFiltered } from "../interfaces/IFiltered";
import { IMapped } from "../interfaces/IMapped";
export declare class SomeMatched<T> implements IFiltered<T> {
    private value;
    constructor(value: T);
    do(action: (value: T) => void): IActionable<T>;
    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
