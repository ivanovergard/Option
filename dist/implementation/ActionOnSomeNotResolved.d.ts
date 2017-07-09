import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
export declare class ActionOnSomeNotResolved<T> implements IActionable<T> {
    private value;
    constructor(value: T);
    when(predicate: (value: T) => boolean): IFilteredActionable<T>;
    whenSome(): IFilteredActionable<T>;
    whenNone(): IFilteredNoneActionable<T>;
    execute(): void;
}
