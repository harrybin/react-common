import React, {
    useLayoutEffect,
    useEffect,
    useState,
    useRef,
    EffectCallback,
    DependencyList,
    useReducer,
    SetStateAction,
    Dispatch,
    ReducerState,
    Reducer,
    ReducerAction,
} from 'react';
// hooks that depend on these imports are commented
// import { isMobileOrTablet } from '../globals/environment';
// import { apiConfig, EnvName } from '../globals/interfaces/ApiConfig';

// https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
/**
 * preserves the props of the last rendering loop.
 * --> will return null on first render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {T}
 */

export function usePrevious<T>(props: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = props;
    });
    return ref.current;
}

/**
 * true if the reference comparison of the current props equals the one of the props from the previous render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {boolean}
 */
export function usePropsChanged<T>(props: T): boolean {
    const prevProps = usePrevious<T>(props);
    const changed = (!prevProps && props) || prevProps !== props;
    //ref compare
    return changed as boolean;
}

/**
 * boolean can be used in useEffect function with an if() clause to execute code like in a "didmount" lifecycle function.
 * It's called only the *first* time the component is rendered.
 *
 * @export
 * @returns {boolean}
 */
export function useFirstRender(): boolean {
    const didMount = useRef<boolean>(false);

    useEffect(() => {
        if (!didMount.current) didMount.current = true;
    }, []);
    return !didMount.current;
}

/**
 * Passed function is executed as "onDidmount" lifecycle function.
 * It's, only when the component is mounted/rendered the first time.
 *
 * @export
 * @returns {boolean}
 */
export function useDidMount(onDidmount: () => void) {
    useEffect(() => {
        onDidmount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

/**
 * Passed function is executed as "onUnmount" lifecycle function.
 * It's, only when the component is unmounted.
 * This also works because a useEffect without dependencies is used whereas return functions of useEffects having dependencies are are called on dependency changes too.
 *
 * @export
 * @returns {boolean}
 */
export function useWillUnmount(onUnmount: () => void) {
    useEffect(() => {
        return () => {
            onUnmount();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

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
// eslint-disable-next-line @typescript-eslint/ban-types
export function useDefaultProps<P extends object, DP extends Partial<P>>(props: P, defaultProps: DP): DP & P {
    return {
        ...defaultProps,
        ...props,
    };
}

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
export const useEffectDebugger = (
    effectHook: EffectCallback,
    dependencies: DependencyList,
    dependencyNames: string[] = []
) => {
    const previousDeps = usePrevious(dependencies) ?? [];

    const changedDeps = dependencies.reduce((accum, dependency, index) => {
        if (dependency !== previousDeps[index]) {
            const keyName = dependencyNames[index] || index;
            return Object.assign({}, accum, {
                [keyName]: {
                    before: previousDeps[index],
                    after: dependency,
                },
            });
        }

        return accum;
    }, {});

    if (Object.keys(changedDeps).length) {
        console.log('[useEffectDebugger] ', changedDeps);
    }

    useEffect(effectHook, [effectHook]);
};

/**
 * Used to calculate the rest height of a page. With this you can set a component to fill the rest height of a page.
 * Remarks: only works for components directly rendering. If your component is rendered lazy, like components on non-active tabs you need useOnScreen too. See FillHeight component.
 * @export
 * @template T type of the container around the element to set the restHeight
 * @param {React.MutableRefObject<T>} ref ref of the container sourounding the element
 * @param {React.Dispatch<React.SetStateAction<number>>} setRestHeight state setter for the height of the element to fill the rest of the page
 * @returns
 */
// export function useDimensions<T extends Element>(
//   ref: React.MutableRefObject<T>,
//   setRestHeight: React.Dispatch<React.SetStateAction<number>>,
//   forceUpdate: boolean,
// ) {
//   const theme = useTheme();
//   const orientationWidth = React.useRef<number>();

//   const updateRestHeight = React.useCallback(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect(); //fixes android keyboard shrinking height, see #REC-2464
//       if (isMobileOrTablet() && !forceUpdate && orientationWidth.current === rect.width) return;
//       setRestHeight(window.innerHeight - (rect.top + parseInt(theme.spacing(2))));
//       orientationWidth.current = rect.width;
//     }
//   }, [forceUpdate, ref, setRestHeight, theme]);

//   useLayoutEffect(() => {
//     window.addEventListener('resize', updateRestHeight);
//     updateRestHeight();
//     return () => {
//       window.removeEventListener('resize', updateRestHeight);
//     };
//   }, [ref, theme, updateRestHeight]);

//   return { updateRestHeight };
// }

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
export function useOnScreen<T extends Element>(
    ref: React.MutableRefObject<T>,
    notifyIntersectionChange?: () => void,
    rootMargin = '0px'
) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
                if (notifyIntersectionChange) notifyIntersectionChange();
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            const obServedRef = ref.current;
            observer.observe(obServedRef);
            return () => {
                observer.unobserve(obServedRef);
            };
        }
        return undefined;
    }, [notifyIntersectionChange, ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

    return { isIntersecting };
}

/**
 * Provides a "isInDebugMode" state which can be trigger by pressing CTRL+ALT+SHIFT+D
 *
 * @export
 * @return {isInDebugMode, debugChangesApplied, setDebugChangesApplied}
 */
// export function useDebugMode() {
//   const controlPressed = React.useRef<boolean>(false);
//   const altPressed = React.useRef<boolean>(false);
//   const [isInDebugMode, setIsInDebugMode] = React.useState<boolean>(false);
//   const [debugChangesApplied, setDebugChangesApplied] = React.useState<boolean>(false);

//   React.useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     function keydownHandler(ev: any) {
//       if (ev.key === 'Control') controlPressed.current = true;
//       if (ev.key === 'Alt') altPressed.current = true;
//       if (ev.key === 'D' && controlPressed && altPressed) {
//         //set debug mode
//         setIsInDebugMode(true);
//         alert('+++ DebugMode ENABLED +++');
//       }
//     }
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     function keyupHandler(ev: any) {
//       if (ev.key === 'Control') controlPressed.current = false;
//       if (ev.key === 'Alt') altPressed.current = false;
//     }

//     //DEBUG only
//     if (apiConfig.env.NAME !== EnvName.PRD) {
//       window.addEventListener('keydown', keydownHandler);
//       window.addEventListener('keyup', keyupHandler);
//       return () => {
//         window.removeEventListener('keydown', keydownHandler);
//         window.removeEventListener('keyup', keyupHandler);
//       };
//     }
//     return undefined;
//   }, [altPressed, controlPressed]);

//   return { isInDebugMode, debugChangesApplied, setDebugChangesApplied };
// }

// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
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
export function usePersistedState<T>(
    prefix: string,
    key: string,
    defaultValue?: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = React.useState<T>(() => {
        if (!(prefix && key)) return defaultValue;
        const storedItem = localStorage.getItem(prefix + '_' + key);
        if (!storedItem || storedItem === 'undefined') return defaultValue;
        return JSON.parse(storedItem) || defaultValue;
    });
    useEffect(() => {
        prefix && key && localStorage.setItem(prefix + '_' + key, JSON.stringify(state));
    }, [key, prefix, state]);
    return [state, setState];
}

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
export function usePersistedStateOneway<T>(
    prefix: string,
    key: string,
    defaultValue: T
): [T, Dispatch<SetStateAction<T>>, () => T, React.MutableRefObject<number>] {
    const [state, setState] = React.useState<T>(defaultValue);
    const loadCount = useRef<number>(0);
    useEffect(() => {
        // only allow saving after loading, otherwise the initial state will always overwrite saved values with the default before loading
        loadCount.current > 0 && prefix && key && localStorage.setItem(prefix + '_' + key, JSON.stringify(state));
    }, [key, prefix, state]);

    const loadState = (): T => {
        loadCount.current++;
        return prefix && key
            ? JSON.parse(localStorage.getItem(prefix + '_' + key) ?? '') || defaultValue
            : defaultValue;
    };
    return [state, setState, loadState, loadCount];
}

/**
 * Provides a ref-variable (like useRef) but also stores it value in the local storage and is used like useState.
 *
 * @export
 * @template T type of the ref-variable
 * @param {string} key the name/key for the storage value
 * @param {T} defaultValue default value
 * @return {*}  {[T, Dispatch<SetStateAction<T>>]} [value,setter] array like when using useState
 */
export function usePersistedRef<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const ref = React.useRef<T>(defaultValue);
    const localStoreVal = localStorage.getItem(key);
    if (!localStoreVal) {
        ref.current = defaultValue;
        localStorage.setItem(key, JSON.stringify(defaultValue));
    } else ref.current = JSON.parse(localStoreVal) || defaultValue;

    const setRef = (refValue: T) => {
        ref.current = refValue;
        localStorage.setItem(key, JSON.stringify(refValue));
    };
    return [ref.current, setRef as Dispatch<SetStateAction<T>>];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePersistedReducer<R extends Reducer<any, any>, T>(
    reducer: R,
    defaultState: T,
    key: string,
    initFunc?: (arg: T) => ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
    const hookVars = useReducer(reducer, defaultState, (reDefaultState) => {
        const persisted = JSON.parse(localStorage.getItem(key) ?? '');
        return persisted !== null ? persisted : initFunc ? initFunc(reDefaultState) : reDefaultState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(hookVars[0]));
    }, [hookVars, key]);

    return hookVars;
}
/**
 *
 * Hook that activates debug mode based on a given shortcut.
 */
export function useDebugMode() {
    const [isInDebugMode, setIsInDebugMode] = React.useState<boolean>(false);
    const [debugChangesApplied, setDebugChangesApplied] = React.useState<boolean>(false);

    React.useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function keydownHandler(ev: KeyboardEvent) {
            if (ev.repeat) return;
            if (ev.ctrlKey && ev.shiftKey && ev.altKey && ev.key === 'D') {
                //set debug mode
                setIsInDebugMode(!isInDebugMode);
            }
        }

        window.addEventListener('keydown', keydownHandler);
        return () => {
            window.removeEventListener('keydown', keydownHandler);
        };
    }, [isInDebugMode]);

    return { isInDebugMode, debugChangesApplied, setDebugChangesApplied };
}
