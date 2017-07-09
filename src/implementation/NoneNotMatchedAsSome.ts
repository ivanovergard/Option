import { IFiltered } from "../interfaces/IFiltered";
import { ActionOnNoneNotResolved } from "./ActionOnNoneNotResolved";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
import { MappingOnNoneNotResolved } from "./MappingOnNoneNotResolved";

export class NoneNotMatchedAsSome<T> implements IFiltered<T> {

    do(action: (value: T) => void): IActionable<T> {
        return new ActionOnNoneNotResolved<T>();
    }

    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult> {
        return new MappingOnNoneNotResolved<T, TResult>();
    }
    
}