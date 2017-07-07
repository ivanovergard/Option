import { IActionable } from "./IActionable";

export interface IFilteredNone<T> {
    do(action:()=> void): IActionable<T>;
}