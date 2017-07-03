import { IFilteredActionable } from "src/interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "src/interfaces/IFilteredNoneActionable";

export interface IActionable<T> {
    when(action: (value:T) => boolean) : IFilteredActionable<T>;
    whenSome(): IFilteredActionable<T>;
    whenNone(): IFilteredNoneActionable<T>;
}