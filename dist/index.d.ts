/// <reference types="react" />
import * as React$1 from 'react';
import React__default, { EffectCallback, Dispatch, SetStateAction, Reducer, ReducerState, ReducerAction } from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

interface IfProps {
    cond: boolean | string | null | undefined | unknown;
    else?: React$1.ReactNode | React$1.ReactNode[];
    children: React$1.ReactNode | React$1.ReactNode[];
}
declare function IfComp(props: IfProps): React$1.JSX.Element;
declare const If: React$1.MemoExoticComponent<typeof IfComp>;

interface MarkdownProps {
    [key: string]: any;
    children: string;
    options?: MarkdownToJSX.Options;
}
declare function Markdown(props: MarkdownProps): React__default.JSX.Element;

interface NameValueTextProps {
    name: string;
    value?: string | number | JSX.Element;
    oneLine?: boolean;
    children?: React__default.ReactNode | React__default.ReactNode[];
    verticalSpacing?: string;
}
/**
 * A component for displaying name-value paired text.
 *
 * @export
 * @param {NameValueTextProps} props
 * @returns
 */
declare function NameValueTextComp(props: NameValueTextProps): React__default.JSX.Element;
declare const NameValueText: React__default.MemoExoticComponent<typeof NameValueTextComp>;

type ConfirmationDialogCloseHandler = (firstButtonPressed?: boolean) => void | unknown | Promise<unknown>;
type ConfirmationDialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
interface ConfirmationDialogRawProps {
    title: string;
    text: string | (() => string);
    open: boolean;
    onClose: ConfirmationDialogCloseHandler;
    id?: string;
    /**
     * The left button caption.
     * If undefined button is not shown.
     * If empty string (''), the default caption value "Cancel" is used.
     * Default value: undefined.
     *
     * @type {string}
     */
    leftButtonLabel?: string;
    leftButtonDisabled?: boolean;
    /**
     * The right button caption.
     * If undefined button is not shown.
     * If empty string (''), the default caption value "Ok" is used.
     * Default value: '' (--> Ok).
     *
     * @type {string}
     */
    rightButtonLabel?: string;
    isRightButtonHighlighted?: boolean;
    fullScreen?: boolean;
    maxWidth?: ConfirmationDialogMaxWidth;
    children?: React__default.ReactNode;
}
declare function ConfirmationDialog(props: ConfirmationDialogRawProps): React__default.JSX.Element;
declare namespace ConfirmationDialog {
    var defaultProps: {
        title: string;
        text: string;
        leftButtonLabel: string;
        rightButtonLabel: undefined;
    };
}

interface ErrorReportDescriptions {
    descMsg: string;
    descHintMsg: string;
    descCaptionMsg: string;
    descRequiredMsg: string;
    reproCaptionMsg: string;
    reproRequiredMsg: string;
    emailDescMsg: string;
    phoneDescMsg: string;
}
interface ErrorReportDialogProps {
    /**
     * Trigger action when 'download' is clicked. E.g. generate report and save in local storage
     * @returns null
     */
    downloadClicked: () => void;
    descChanged: (text: string) => void;
    reproChanged: (text: string) => void;
    mailChanged: (text: string) => void;
    phoneChanged: (text: string) => void;
    /**
     * Provides descriptions for the dialog fields. You can provide your own ErrorDescriptions or
     * use the default descriptions
     */
    errorReportDescriptions: ErrorReportDescriptions;
}
declare const ErrorReportDialog: React$1.MemoExoticComponent<{
    (props: ErrorReportDialogProps): React$1.JSX.Element;
    defaultProps: {
        downloadClicked: () => void;
        descChanged: () => void;
        reproChanged: () => void;
        mailChanged: () => void;
        phoneChanged: () => void;
        errorReportDescriptions: ErrorReportDescriptions;
    };
}>;

/**
 * preserves the props of the last rendering loop.
 * --> will return null on first render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {T}
 */
declare function usePrevious<T>(props: T): T | undefined;
/**
 * true if the reference comparison of the current props equals the one of the props from the previous render.
 *
 * @export
 * @template T type of props
 * @param {T} props props of the component
 * @returns {boolean}
 */
declare function usePropsChanged<T>(props: T): boolean;
/**
 * boolean can be used in useEffect function with an if() clause to execute code like in a "didmount" lifecycle function.
 * It's called only the *first* time the component is rendered.
 *
 * @export
 * @returns {boolean}
 */
declare function useFirstRender(): boolean;
/**
 * Passed function is executed as "onDidmount" lifecycle function.
 * It's, only when the component is mounted/rendered the first time.
 *
 * @export
 * @returns {boolean}
 */
declare function useDidMount(onDidmount: () => void): void;
/**
 * Passed function is executed as "onUnmount" lifecycle function.
 * It's, only when the component is unmounted.
 * This also works because a useEffect without dependencies is used whereas return functions of useEffects having dependencies are are called on dependency changes too.
 *
 * @export
 * @returns {boolean}
 */
declare function useWillUnmount(onUnmount: () => void): void;
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
declare function useDefaultProps<P extends object, DP extends Partial<P>>(props: P, defaultProps: DP): DP & P;
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
declare const useEffectDebugger: (effectHook: EffectCallback, dependencies: React__default.DependencyList, dependencyNames?: string[]) => void;
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
declare function useOnScreen<T extends Element>(ref: React__default.MutableRefObject<T>, notifyIntersectionChange?: () => void, rootMargin?: string): {
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
declare function usePersistedState<T>(prefix: string, key: string, defaultValue?: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
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
declare function usePersistedStateOneway<T>(prefix: string, key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>, () => T, React__default.MutableRefObject<number>];
/**
 * Provides a ref-variable (like useRef) but also stores it value in the local storage and is used like useState.
 *
 * @export
 * @template T type of the ref-variable
 * @param {string} key the name/key for the storage value
 * @param {T} defaultValue default value
 * @return {*}  {[T, Dispatch<SetStateAction<T>>]} [value,setter] array like when using useState
 */
declare function usePersistedRef<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
declare function usePersistedReducer<R extends Reducer<any, any>, T>(reducer: R, defaultState: T, key: string, initFunc?: (arg: T) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>];
/**
 *
 * Hook that activates debug mode based on a given shortcut.
 */
declare function useDebugMode(): {
    isInDebugMode: boolean;
    debugChangesApplied: boolean;
    setDebugChangesApplied: React__default.Dispatch<React__default.SetStateAction<boolean>>;
};

/**
 * get the name of a property of type T
 *
 * @template T type to work on
 * @param {keyof T} name property name
 * @returns {string}
 */
declare function nameof<T>(name: keyof T): string;
/**
 * function checking if an object is an array or not.
 *
 * @export
 * @param {object} obj
 * @returns true if object is an arry, false in case Array.isArray is not availabe or the object is no array.
 */
declare function isArray(obj: object): boolean;
/**
 * determines is the value is an object and not null (which e.g. can't be rendered) or not.
 * (null is also treated as object)
 *
 * @export
 * @param {unknown} value
 * @returns true if value is a non null object
 */
declare function isObject(value: unknown): boolean;
/**
 * removes an element from an array. If the key is not passed a reference comparison is used.
 *
 * @export
 * @template T
 * @param {Array<T>} array
 * @param {T} value element
 * @param {keyof T} key property of element identifying it,e.g. ID
 * @returns
 */
declare function removeFromArray<T>(arr: Array<T>, value: T, key?: keyof T): T[];
/**
 * inserts an element into an array at the index position
 *
 * @export
 * @template T
 * @param {Array<T>} arr
 * @param {T} value element
 * @returns
 */
declare function insertIntoArray<T>(arr: Array<T>, value: T, index: number): T[];
/**
 * compares the length and the values of two arrays
 *
 * @export
 * @template T
 * @param {Array<T>} arrayA
 * @param {Array<T>} arrayB
 * @param {T} value element
 * @returns {boolean}
 */
declare function areArraysEqual<T>(arrayA: Array<T>, arrayB: Array<T>): boolean;
/**
 * generates GUIs using random values.
 *
 * @export
 * @returns
 */
declare function guidGenerator(): string;
/**
 * date compare function.
 * from https://codesandbox.io/s/optimistic-star-597qt?file=/demo.js:413-581
 * @export
 * @returns
 */
declare function compareDate(a: Date, b: Date): number;
/**
 * determines the latest date of all the given date values.
 *
 * @export
 * @param {Date[]} dates
 * @return {*}  {Date}
 */
declare function getLatestDateof(dates: Date[]): Date | undefined;
/**
 * creates a partial object from the given where the new object only has the properties passed in the name keys array.
 * The values of those properties are copied from the original object.
 *
 * @export
 * @template T
 * @param {T} fullEntity original object
 * @param {(keyof T)[]} properties name keys of properties for the new object
 * @returns {T}
 */
declare function createPartialObject<T>(fullEntity: T, properties: (keyof T)[]): T;
/**
 * same as <see>createPartialObject</see> but ensures the properties 'id' and 'optlock', which are copied anyway and not need to be included in the keys array.
 *
 * @export
 * @template T
 * @param {T} fullEntity
 * @param {(keyof T)[]} properties
 * @returns {T}
 */
declare function createPartialWithIdAndOptLock<T extends {
    id?: string;
    optLock?: number;
}>(fullEntity: T, properties: (keyof T)[]): T;
/**
 * Creates a deep clone of the data by serializing and deserializing the object.
 * Uses JSON.stringify.
 *
 * @export
 * @template T
 * @param {T} data
 * @returns {T}
 */
declare function cloneData<T>(data: T): T;
declare function enumKeys<O extends Record<string, unknown>, K extends keyof O = keyof O>(obj: O): K[];
/**
 * Creates a text file downloaded by the browser.
 *
 * @export
 * @param {string} text
 * @param {string} filename
 */
declare function downloadTxtFile(text: string, filename: string): void;

type SetStateWithCallback<T> = (data: React.SetStateAction<T>, callback?: (value: any) => void) => void;
type DataContextType<T> = [data: T, setData: SetStateWithCallback<T>];

/**
 * interface representing the BaseEntity data object providing an ID and optionally optLock/eTag value
 *
 * @export
 * @interface BaseEntity
 */
interface BaseEntity {
    id: string;
    optLock?: number;
}

interface UrlProps {
    queryString: string;
}
interface CustomHeader {
    name: string;
    value: string;
}
interface StaticDataProps<T> extends UrlProps {
    setDataCallback: (data: T) => void;
}
/**
 * Tye for erroer response callsbacks.
 * @errorResponse ErrorResponse object
 * @originalError response data is either partial data [Record<string, unknown>], is either a problem JSON [ProblemInformation], old be error json or plain text [ErrorResponseType]
 */
type ErrorResponseHandler = (errorResponse: Response) => void;
interface DataProps extends UrlProps {
    isLoading?: boolean;
    setIsLoadingCallback?: (isLoading: boolean) => void;
    handleErrorCallback?: ErrorResponseHandler;
    handleExceptionCallback?: (e: Error) => void;
    handleCustomErrorData?: (data: Record<string, unknown>) => void;
}
interface LoadDataPropsAsync extends DataProps {
    lastQuery?: string;
    setLastQueryCallBack?: (lastQuery: string) => void;
    setResponseHeaders?: (headers: Headers) => void;
    customHeaderList?: CustomHeader[];
    customQueryParam?: {
        name: string;
        value: string;
    };
    customResponseHandler?: (response: Response) => void;
    setErrorResponse?: React.Dispatch<React.SetStateAction<number>>;
}
interface LoadDataProps<T> extends LoadDataPropsAsync {
    setDataCallback: (data: T) => void;
}
type RestMethod = 'PUT' | 'PATCH' | 'POST' | 'DELETE';
interface UpdateDataPropsAsync<T> extends DataProps {
    data: T;
    method?: RestMethod;
    noResultExpected?: boolean;
    eTag?: number;
    customHeaderList?: CustomHeader[];
    customQueryParam?: {
        name: string;
        value: string;
    };
    customResponseHandler?: (response: Response) => void;
}
interface UpdateDataProps<T> extends UpdateDataPropsAsync<T> {
    setDataCallback?: (data: T, eTag: number) => void;
}

declare function createCommonHeaders(eTag?: string, oidcBaerer?: string): Headers;
declare function useFetch<T extends BaseEntity | {} | null>(): {
    loadDataAsync: (props: LoadDataPropsAsync) => Promise<T[] | T | undefined>;
    updateDataAsync: (props: UpdateDataPropsAsync<T>) => Promise<T>;
    loadStaticDataAsync: (props: LoadDataPropsAsync) => Promise<T>;
    resetStaticData: (query: string, customQueryParam?: {
        name: string;
        value: string;
    }) => void;
};

declare function OidcBarerProxyProvider(props: {
    children: React$1.ReactNode;
}): React$1.JSX.Element;
declare function useOidcBaerer(): string;

declare enum SuspenseStatus {
    Pending = "pending",
    Success = "success",
    Error = "error"
}
type SuspendedPromise<T> = {
    query(): T | undefined;
};
declare function suspend<T>(promise: Promise<T>): SuspendedPromise<T>;

/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */
/**
 * Wrapped promises are being cached until the component is unmounted.
 */
declare const queryPromiseCache: Map<string, SuspendedPromise<any>>;
/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
declare function useQuery<T extends object>(props: LoadDataPropsAsync): T | undefined;

/**
 *  SUSPENSE API IMPlEMENTATION
 *
 *  for loadDataAsync of useFetch from fetchCommands
 */
/**
 * Wrapped promises are being cached until the component is unmounted.
 */
declare const updatePromiseCache: Map<string, SuspendedPromise<any>>;
/**
 * Returns undefined or the data returned by the query. Until that point in time,
 * throws promises or exception in compliance with the React Suspense API. Hence,
 * expects to be wrapped by a Suspense component.
 */
declare function useUpdate<T extends object>(props: UpdateDataPropsAsync<T>): T | undefined;

export { type BaseEntity, ConfirmationDialog, type CustomHeader, type DataContextType, type DataProps, ErrorReportDialog, type ErrorResponseHandler, If, type LoadDataProps, type LoadDataPropsAsync, Markdown, NameValueText, OidcBarerProxyProvider, type RestMethod, type SetStateWithCallback, type StaticDataProps, type SuspendedPromise, SuspenseStatus, type UpdateDataProps, type UpdateDataPropsAsync, type UrlProps, areArraysEqual, cloneData, compareDate, createCommonHeaders, createPartialObject, createPartialWithIdAndOptLock, downloadTxtFile, enumKeys, getLatestDateof, guidGenerator, insertIntoArray, isArray, isObject, nameof, queryPromiseCache, removeFromArray, suspend, updatePromiseCache, useDebugMode, useDefaultProps, useDidMount, useEffectDebugger, useFetch, useFirstRender, useOidcBaerer, useOnScreen, usePersistedReducer, usePersistedRef, usePersistedState, usePersistedStateOneway, usePrevious, usePropsChanged, useQuery, useUpdate, useWillUnmount };
