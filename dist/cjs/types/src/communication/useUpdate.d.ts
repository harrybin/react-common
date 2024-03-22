import { SuspendedPromise } from './suspend';
import { UpdateDataPropsAsync } from './fetchCommandTypes';
/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */
/**
 * Wrapped promises are being cached until the component is unmounted.
 */
export declare const updatePromiseCache: Map<string, SuspendedPromise<any>>;
/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
export declare function useUpdate<T extends object>(props: UpdateDataPropsAsync<T>): T | undefined;
//# sourceMappingURL=useUpdate.d.ts.map