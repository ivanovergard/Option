import { IActionable } from "./IActionable";

export interface IFilteredNoneActionable<T> {
    do(action:()=> void): IActionable<T>;
}