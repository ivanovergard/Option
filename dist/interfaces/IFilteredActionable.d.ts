import { IActionable } from "./IActionable";
export interface IFilteredActionable<T> {
    do(action: (value: T) => void): IActionable<T>;
}
