export class Maybe<T> {

    private constructor(private contents: Array<T>) {}

    public static some<T>(value: T) {
        return new Maybe<T>([value])
    }

    public static none<T>() {
        return new Maybe<T>([])
    }

    public do(action: (value:T) => void) {
        this.contents.forEach( (item)=>{ action(item) })
    }
}