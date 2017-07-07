import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { ActionOnSomeNotResolved } from "./ActionOnSomeNotResolved";

export class SomeNotMatchedAsNone<T> implements IFilteredNone<T>{

    constructor(private value: T) { }

    do(action: () => void): IActionable<T> {
        return new ActionOnSomeNotResolved<T>(this.value);
    }

}