/**
 * get the name of a property of type T
 *
 * @template T type to work on
 * @param {keyof T} name property name
 * @returns {string}
 */
export declare function nameof<T>(name: keyof T): string;
/**
 * function checking if an object is an array or not.
 *
 * @export
 * @param {object} obj
 * @returns true if object is an arry, false in case Array.isArray is not availabe or the object is no array.
 */
export declare function isArray(obj: object): boolean;
/**
 * determines is the value is an object and not null (which e.g. can't be rendered) or not.
 * (null is also treated as object)
 *
 * @export
 * @param {unknown} value
 * @returns true if value is a non null object
 */
export declare function isObject(value: unknown): boolean;
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
export declare function removeFromArray<T>(arr: Array<T>, value: T, key?: keyof T): T[];
/**
 * inserts an element into an array at the index position
 *
 * @export
 * @template T
 * @param {Array<T>} arr
 * @param {T} value element
 * @returns
 */
export declare function insertIntoArray<T>(arr: Array<T>, value: T, index: number): T[];
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
export declare function areArraysEqual<T>(arrayA: Array<T>, arrayB: Array<T>): boolean;
/**
 * generates GUIs using random values.
 *
 * @export
 * @returns
 */
export declare function guidGenerator(): string;
/**
 * date compare function.
 * from https://codesandbox.io/s/optimistic-star-597qt?file=/demo.js:413-581
 * @export
 * @returns
 */
export declare function compareDate(a: Date, b: Date): number;
/**
 * determines the latest date of all the given date values.
 *
 * @export
 * @param {Date[]} dates
 * @return {*}  {Date}
 */
export declare function getLatestDateof(dates: Date[]): Date | undefined;
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
export declare function createPartialObject<T>(fullEntity: T, properties: (keyof T)[]): T;
/**
 * same as <see>createPartialObject</see> but ensures the properties 'id' and 'optlock', which are copied anyway and not need to be included in the keys array.
 *
 * @export
 * @template T
 * @param {T} fullEntity
 * @param {(keyof T)[]} properties
 * @returns {T}
 */
export declare function createPartialWithIdAndOptLock<T extends {
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
export declare function cloneData<T>(data: T): T;
export declare function enumKeys<O extends Record<string, unknown>, K extends keyof O = keyof O>(obj: O): K[];
/**
 * Creates a text file downloaded by the browser.
 *
 * @export
 * @param {string} text
 * @param {string} filename
 */
export declare function downloadTxtFile(text: string, filename: string): void;
//# sourceMappingURL=helperFunctions.d.ts.map