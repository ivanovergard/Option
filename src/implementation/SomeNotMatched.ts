import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { IFiltered } from "../interfaces/IFiltered";
import { IActionable } from "../interfaces/IActionable";
import { ActionOnSomeNotResolved } from "./ActionOnSomeNotResolved";

export class SomeNotMatched<T> implements IFiltered<T>, IFilteredNoneActionable<T> {
    
    constructor(private value: T) { }
    
    do(action: (value: T) => void): IActionable<T> {
        return new ActionOnSomeNotResolved<T>(this.value);
    }
}