import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
export declare class ActionOnNoneNotResolved<T> implements IActionable<T> {
    when(predicate: (value: T) => boolean): IFilteredActionable<T>;
    whenSome(): IFilteredActionable<T>;
    whenNone(): IFilteredNoneActionable<T>;
    execute(): void;
}
