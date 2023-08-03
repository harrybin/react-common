import { useEffect } from 'react';
import { suspend, SuspendedPromise } from './suspend';
import { LoadDataPropsAsync } from './fetchCommandTypes';
import { useFetch } from './fetchCommands';

/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */

/**
 * Wrapped promises are being cached until the component is unmounted.
 */
export const queryPromiseCache = new Map<string, SuspendedPromise<any>>();

/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
export function useQuery<T extends object>(props: LoadDataPropsAsync): T | undefined {
    const { loadDataAsync } = useFetch();

    useEffect(
        // Cleanup cache on unmount
        () => () => {
            props.queryString && queryPromiseCache.delete(props.queryString);
        },
        [props.queryString]
    );
    if (!props.queryString) return undefined;

    let wrappedPromise = queryPromiseCache.get(props.queryString);
    if (!wrappedPromise) {
        const promise = new Promise<T>(async (resolve, _) => {
            // Send request
            //const response = await fetch(url, { headers: defaultHeaders });
            const data = (await loadDataAsync(props)) as T;
            resolve(data);
        });

        // Wrap the promise to comply with the contract of the Suspense API
        wrappedPromise = suspend<T>(promise);
        queryPromiseCache.set(props.queryString, wrappedPromise);
    }

    return wrappedPromise.query();
}
