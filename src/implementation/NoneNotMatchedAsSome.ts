import { IFiltered } from "../interfaces/IFiltered";
import { ActionOnNoneNotResolved } from "./ActionOnNoneNotResolved";
import { IActionable } from "../interfaces/IActionable";

export class NoneNotMatchedAsSome<T> implements IFiltered<T> {
    do(action: (value: T) => void): IActionable<T> {
        return new ActionOnNoneNotResolved<T>();
    }
}