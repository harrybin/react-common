import React, { EffectCallback, SetStateAction, Dispatch, ReducerState, Reducer, ReducerAction } from 'react';
/**
 * preserves the props of the last rendering loop.
 * --> will return null on first render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {T}
 */
export declare function usePrevious<T>(props: T): T | undefined;
/**
 * true if the reference comparison of the current props equals the one of the props from the previous render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {boolean}
 */
export declare function usePropsChanged<T>(props: T): boolean;
/**
 * boolean can be used in useEffect function with an if() clause to execute code like in a "didmount" lifecycle function.
 * It's called only the *first* time the component is rendered.
 *
 * @export
 * @returns {boolean}
 */
export declare function useFirstRender(): boolean;
/**
 * Passed function is executed as "onDidmount" lifecycle function.
 * It's, only when the component is mounted/rendered the first time.
 *
 * @export
 * @returns {boolean}
 */
export declare function useDidMount(onDidmount: () => void): void;
/**
 * Passed function is executed as "onUnmount" lifecycle function.
 * It's, only when the component is unmounted.
 * This also works because a useEffect without dependencies is used whereas return functions of useEffects having dependencies are are called on dependency changes too.
 *
 * @export
 * @returns {boolean}
 */
export declare function useWillUnmount(onUnmount: () => void): void;
/**
 * gets a props object "initialized" with the default values passed, where no props values is assigned.
 *
 * @export
 * @template P
 * @template DP
 * @param {P} props component props
 * @param {DP} defaultProps default values object for component props (may be partial)
 * @returns {(DP & P)}
 */
export declare function useDefaultProps<P extends object, DP extends Partial<P>>(props: P, defaultProps: DP): DP & P;
/**
 * hook used tu replace 'useEffect' for getting debug information which dependency change caused the useEffect call.
 * Add an additional string[] with the dependency names as last array to get more readable logs.
 * @example <caption>original --> debugging</caption>
 *  ```ts
 *  //original code
 *  useEffect(()=>{
 *   //any code
 *  },[dep1, dep2])
 *  ```
 *  ```ts
 *  //original code
 *  useEffectDebugger(()=>{
 *   //debugging code
 *  },[dep1, dep2],["dep1","dep2"])
 *  ```
 * inspired from https://stackoverflow.com/questions/55187563/determine-which-dependency-array-variable-caused-useeffect-hook-to-fire
 * @param {EffectCallback} effectHook
 * @param {DependencyList} dependencies
 * @param {string[]} [dependencyNames=[]]
 */
export declare const useEffectDebugger: (effectHook: EffectCallback, dependencies: React.DependencyList, dependencyNames?: string[]) => void;
/**
 * Used to calculate the rest height of a page. With this you can set a component to fill the rest height of a page.
 * Remarks: only works for components directly rendering. If your component is rendered lazy, like components on non-active tabs you need useOnScreen too. See FillHeight component.
 * @export
 * @template T type of the container around the element to set the restHeight
 * @param {React.MutableRefObject<T>} ref ref of the container sourounding the element
 * @param {React.Dispatch<React.SetStateAction<number>>} setRestHeight state setter for the height of the element to fill the rest of the page
 * @returns
 */
/**
 * Hook detecting if a component is visible and firing an event if a hidden component is to be rendered.
 *
 * @export
 * @template T type of component to observe
 * @param {React.MutableRefObject<T>} ref ref of component to observe
 * @param {() => void} [notifyIntersectionChange] event fired when visible state of component changes
 * @param {string} [rootMargin='0px'] intersection buffer for accuracy
 * @returns
 */
export declare function useOnScreen<T extends Element>(ref: React.MutableRefObject<T>, notifyIntersectionChange?: () => void, rootMargin?: string): {
    isIntersecting: boolean;
};
/**
 * Provides a "isInDebugMode" state which can be trigger by pressing CTRL+ALT+SHIFT+D
 *
 * @export
 * @return {isInDebugMode, debugChangesApplied, setDebugChangesApplied}
 */
/**
 * hook providing a useState with optionally persisting the value in the local storage. Loading and saving.
 *
 * @export
 * @template T type of the state variable
 * @param {string} prefix, if undefined the value will not be persisted in the local storage
 * @param {string} key, if undefined the value will not be persisted in the local storage
 * @param {T} defaultValue the default value for the setting
 * @returns {[T, Dispatch<SetStateAction<T>>]}
 */
export declare function usePersistedState<T>(prefix: string, key: string, defaultValue?: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
/**
 * hook providing a useState with optionally writing the value in the local storage. WRITING ONLY.
 * Hint: you need to call "loadState" before any value will be saved!
 *
 * @export
 * @template T
 * @param {string} prefix
 * @param {string} key
 * @param {T} defaultValue
 * @returns {[T, Dispatch<SetStateAction<T>>]}
 */
export declare function usePersistedStateOneway<T>(prefix: string, key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>, () => T, React.MutableRefObject<number>];
/**
 * Provides a ref-variable (like useRef) but also stores it value in the local storage and is used like useState.
 *
 * @export
 * @template T type of the ref-variable
 * @param {string} key the name/key for the storage value
 * @param {T} defaultValue default value
 * @return {*}  {[T, Dispatch<SetStateAction<T>>]} [value,setter] array like when using useState
 */
export declare function usePersistedRef<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
export declare function usePersistedReducer<R extends Reducer<any, any>, T>(reducer: R, defaultState: T, key: string, initFunc?: (arg: T) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>];
/**
 *
 * Hook that activates debug mode based on a given shortcut.
 */
export declare function useDebugMode(): {
    isInDebugMode: boolean;
    debugChangesApplied: boolean;
    setDebugChangesApplied: React.Dispatch<React.SetStateAction<boolean>>;
};
//# sourceMappingURL=customHooks.d.ts.map