import { IFiltered } from "./interfaces/IFiltered";
import { IFilteredNone } from "./interfaces/IFilteredNone";
import { IOption } from "./interfaces/IOption";
import { SomeMatched } from "./implementation/SomeMatched";
import { SomeNotMatched } from "./implementation/SomeNotMatched";
import { NoneNotMatchedAsSome } from "./implementation/NoneNotMatchedAsSome";
import { NoneMatched } from "./implementation/NoneMatched";
import { SomeNotMatchedAsNone } from "./implementation/SomeNotMatchedAsNone";

export class Option<T> {

    private constructor(private contents: Array<T>) {}

    public static some<T>(value: T) {
        return new Option<T>([value])
    }

    public static none<T>() {
        return new Option<T>([])
    }

    when(action: (value: T) => boolean): IFiltered<T> {
        const result = this.contents.filter(action);
        if (result.length === 1) {
            return new SomeMatched<T>(result[0]);
        } else if (this.contents.length === 1) {            
            return new SomeNotMatched<T>(this.contents[0]);
        }
        return new NoneNotMatchedAsSome<T>();
    }

    whenSome(): IFiltered<T> {
        if (this.contents.length === 1)
            return this.contents.map(c => new SomeMatched<T>(c))[0];
        return new NoneNotMatchedAsSome<T>();
    }

    whenNone(): IFilteredNone<T> {
        if (this.contents.length === 1) 
            return this.contents.map(c => new SomeNotMatchedAsNone<T>(c))[0];
        return new NoneMatched<T>();
    }

}
