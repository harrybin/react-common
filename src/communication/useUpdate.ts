import { useEffect } from 'react';
import { suspend, SuspendedPromise } from './suspend';
import { UpdateDataPropsAsync } from './fetchCommandTypes';
import { useFetch } from './fetchCommands';

/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */

/**
 * Wrapped promises are being cached until the component is unmounted.
 */
export const updatePromiseCache = new Map<string, SuspendedPromise<any>>();

/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
export function useUpdate<T extends object>(props: UpdateDataPropsAsync<T>): T | undefined {
    const { updateDataAsync } = useFetch();

    useEffect(
        // Cleanup cache on unmount
        () => () => {
            props.queryString && updatePromiseCache.delete(props.queryString);
        },
        [props.queryString]
    );
    if (!props.queryString) return undefined;

    let wrappedPromise = updatePromiseCache.get(props.queryString);
    if (!wrappedPromise) {
        const promise = new Promise<T>(async (resolve, _) => {
            // Send update request
            const data = (await updateDataAsync(props)) as T;
            resolve(data);
        });

        // Wrap the promise to comply with the contract of the Suspense API
        wrappedPromise = suspend<T>(promise);
        updatePromiseCache.set(props.queryString, wrappedPromise);
    }

    return wrappedPromise.query();
}
