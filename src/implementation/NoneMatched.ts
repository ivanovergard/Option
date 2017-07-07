import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { ActionResolved } from "./ActionResolved";

export class NoneMatched<T> implements IFilteredNone<T>, IFilteredNoneActionable<T>{
    do(action: () => void): IActionable<T> {
        return new ActionResolved<T>(action);
    }
}