import { IFiltered } from "../interfaces/IFiltered";
import { IActionable } from "../interfaces/IActionable";
import { ActionResolved } from "./ActionResolved";

export class SomeMatched<T> implements IFiltered<T> {
    
    constructor(private value: T) {}

    do(action: (value: T) => void): IActionable<T> {
        return new ActionResolved<T>(() => action(this.value))
    }
}