import { SuspendedPromise } from './suspend';
import { LoadDataPropsAsync } from './fetchCommandTypes';
/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */
/**
 * Wrapped promises are being cached until the component is unmounted.
 */
export declare const queryPromiseCache: Map<string, SuspendedPromise<any>>;
/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
export declare function useQuery<T extends object>(props: LoadDataPropsAsync): T | undefined;
//# sourceMappingURL=useQuery.d.ts.map