import { IFiltered } from "../interfaces/IFiltered";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
export declare class NoneNotMatchedAsSome<T> implements IFiltered<T> {
    do(action: (value: T) => void): IActionable<T>;
    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult>;
}
