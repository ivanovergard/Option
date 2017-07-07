import { IFiltered } from "../interfaces/IFiltered";
import { ActionOnNoneNotResolved } from "./ActionOnNoneNotResolved";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";

export class NoneNotMatchedAsSome<T> implements IFiltered<T> {

    do(action: (value: T) => void): IActionable<T> {
        return new ActionOnNoneNotResolved<T>();
    }

    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult> {
        throw new Error("Method not implemented.");
    }
    
}