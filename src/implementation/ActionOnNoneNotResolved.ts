import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
import { NoneNotMatchedAsSome } from "../implementation/NoneNotMatchedAsSome";
import { NoneMatched } from "../implementation/NoneMatched";

export class ActionOnNoneNotResolved<T> implements IActionable<T> {
    
    when(predicate: (value:T) => boolean): IFilteredActionable<T> {
        return new NoneNotMatchedAsSome<T>();
    }

    whenSome(): IFilteredActionable<T> {
        return new NoneNotMatchedAsSome<T>();
    }

    whenNone(): IFilteredNoneActionable<T> {
        return new NoneMatched<T>();
    }

    execute(): void {
        throw new Error("Method not implemented.");
    }

}