import { IFiltered } from "src/interfaces/IFiltered";
import { IFilteredNone } from "src/interfaces/IFilteredNone";
import { IOption } from "src/interfaces/IOption";

export class Option<T> implements IOption<T>{

    private constructor(private contents: Array<T>) {}

    public static some<T>(value: T) {
        return new Option<T>([value])
    }

    public static none<T>() {
        return new Option<T>([])
    }

    when(action: (value: T) => boolean): IFiltered<T> {
        throw new Error("Method not implemented.");
    }

    whenSome(): IFiltered<T> {
        throw new Error("Method not implemented.");
    }

    whenNone(): IFilteredNone<T> {
        throw new Error("Method not implemented.");
    }

}