import { IActionable } from "../interfaces/IActionable";
import { IFiltered } from "../interfaces/IFiltered";
import { IMapped } from "../interfaces/IMapped";
import { ActionResolved } from "./ActionResolved";

export class SomeMatched<T> implements IFiltered<T> {

    constructor(private value: T) {}

    do(action: (value: T) => void): IActionable<T> {
        return new ActionResolved<T>(() => action(this.value))
    }

    mapTo<TResult>(mapping: (value: T) => TResult): IMapped<T, TResult> {
        throw new Error("Method not implemented.");
    }

}