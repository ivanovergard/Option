import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { SomeMatched } from "./SomeMatched";
import { SomeNotMatched } from "./SomeNotMatched";

export class ActionOnSomeNotResolved<T> implements IActionable<T> {

    constructor(private value: T) { }

    when(predicate: (value: T) => boolean): IFilteredActionable<T> {        
        return predicate(this.value) ? new SomeMatched<T>(this.value) : new SomeNotMatched<T>(this.value);
    }

    whenSome(): IFilteredActionable<T> {
        return new SomeMatched<T>(this.value);
    }

    whenNone(): IFilteredNoneActionable<T> {
        return new SomeNotMatched<T>(this.value);
    }

    execute(): void {};
}