/*
 * This file contains commonly used types
 */

/*
 * SetStateWithCallback is a type used for setting states also providing an callback method called when the state was set.
 * Use this when doing thing after the state set and you don't want to wait the new rendering.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SetStateWithCallback<T> = (data: React.SetStateAction<T>, callback?: (value: any) => void) => void;

/*
 * Commonly used type for full typed contexts (context API)
 */
export type DataContextType<T> = [data: T, setData: SetStateWithCallback<T>];
