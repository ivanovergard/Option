import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { ActionOnSomeNotResolved } from "./ActionOnSomeNotResolved";
import { IMapped } from "../interfaces/IMapped";
import { MappingOnSomeNotResolved } from "./MappingOnSomeNotResolved";

export class SomeNotMatchedAsNone<T> implements IFilteredNone<T>{

    constructor(private value: T) { }

    do(action: () => void): IActionable<T> {
        return new ActionOnSomeNotResolved<T>(this.value);
    }

    mapTo<TResult>(mapping: () => TResult): IMapped<T, TResult> {
        return new MappingOnSomeNotResolved<T, TResult>(this.value);
    }

}