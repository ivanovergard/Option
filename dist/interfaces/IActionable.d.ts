import { IFilteredActionable } from "./IFilteredActionable";
import { IFilteredNoneActionable } from "./IFilteredNoneActionable";
export interface IActionable<T> {
    when(predicate: (value: T) => boolean): IFilteredActionable<T>;
    whenSome(): IFilteredActionable<T>;
    whenNone(): IFilteredNoneActionable<T>;
    execute(): void;
}
