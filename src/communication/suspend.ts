export enum SuspenseStatus {
    Pending = 'pending',
    Success = 'success',
    Error = 'error',
}

export type SuspendedPromise<T> = { query(): T | undefined };

export function suspend<T>(promise: Promise<T>): SuspendedPromise<T> {
    let status: SuspenseStatus = SuspenseStatus.Pending;
    let result: T;
    let error: any;
    let suspender = promise.then(
        (value) => {
            status = SuspenseStatus.Success;
            result = value;
        },
        (err) => {
            status = SuspenseStatus.Error;
            error = err;
        }
    );

    return {
        query() {
            switch (status) {
                case SuspenseStatus.Pending:
                    throw suspender;
                case SuspenseStatus.Error:
                    throw error;
                case SuspenseStatus.Success:
                default:
                    return result;
            }
        },
    };
}
