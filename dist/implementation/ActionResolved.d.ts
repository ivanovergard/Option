import { IActionable } from "../interfaces/IActionable";
import { IFilteredActionable } from "../interfaces/IFilteredActionable";
import { IFilteredNoneActionable } from "../interfaces/IFilteredNoneActionable";
export declare class ActionResolved<T> implements IActionable<T>, IFilteredActionable<T>, IFilteredNoneActionable<T> {
    private action;
    constructor(action: () => any);
    do(action?: (value: T) => void): IActionable<T>;
    when(action: (value: T) => boolean): IFilteredActionable<T>;
    whenSome(): IFilteredActionable<T>;
    whenNone(): IFilteredNoneActionable<T>;
    execute(): void;
}
