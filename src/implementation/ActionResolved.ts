import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";

export class ActionResolved<T> implements IActionable<T>, IFilteredActionable<T>, IFilteredNoneActionable<T> {
    
    constructor(private action: () => any) {

    }

    do(action?: (value: T) => void): IActionable<T> {
        return this;
    }

    when(action: (value: T) => boolean): IFilteredActionable<T> {
        return this;
    }

    whenSome(): IFilteredActionable<T> {
        return this;
    }

    whenNone(): IFilteredNoneActionable<T> {
        return this;
    }

    execute(): void {
        return this.action();
    }

}