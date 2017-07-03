import { IActionable } from "src/interfaces/IActionable";

export interface IFilteredNone<T> {
    do(action:()=> void): IActionable<T>;
}