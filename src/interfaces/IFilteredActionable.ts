import { IActionable } from "src/interfaces/IActionable";

export interface IFilteredActionable<T>
{
    do(action: (value:T)=>void) : IActionable<T>;
}