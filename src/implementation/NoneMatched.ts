import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { IFilteredNone } from "../interfaces/IFilteredNone";
import { IActionable } from "../interfaces/IActionable";
import { IMapped } from "../interfaces/IMapped";
import { ActionResolved } from "./ActionResolved";
import { MappingResolved } from "./MappingResolved";

export class NoneMatched<T> implements IFilteredNone<T>, IFilteredNoneActionable<T>{

    do(action: () => void): IActionable<T> {
        return new ActionResolved<T>(action);
    }

    mapTo<TResult>(mapping: () => TResult): IMapped<T, TResult> {
        return new MappingResolved<T, TResult>(mapping());
    }
    
}