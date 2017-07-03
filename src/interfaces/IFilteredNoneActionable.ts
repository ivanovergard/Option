import { IActionable } from "src/interfaces/IActionable";

export interface IFilteredNoneActionable<T> {
    do(): IActionable<T>;
}