export declare enum SuspenseStatus {
    Pending = "pending",
    Success = "success",
    Error = "error"
}
export type SuspendedPromise<T> = {
    query(): T | undefined;
};
export declare function suspend<T>(promise: Promise<T>): SuspendedPromise<T>;
//# sourceMappingURL=suspend.d.ts.map