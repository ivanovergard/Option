export declare class Maybe<T> {
    private contents;
    private constructor();
    static some<T>(value: T): Maybe<T>;
    static none<T>(): Maybe<T>;
    do(action: (value: T) => void): void;
}
