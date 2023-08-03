/**
 * get the name of a property of type T
 *
 * @template T type to work on
 * @param {keyof T} name property name
 * @returns {string}
 */
export function nameof<T>(name: keyof T): string {
    return name as string;
}

/**
 * function checking if an object is an array or not.
 *
 * @export
 * @param {object} obj
 * @returns true if object is an arry, false in case Array.isArray is not availabe or the object is no array.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isArray(obj: object) {
    if (Array.isArray) return Array.isArray(obj);
    else throw new Error('Polyfill for "Array.isArray" is missing.');
}

/**
 * determines is the value is an object and not null (which e.g. can't be rendered) or not.
 * (null is also treated as object)
 *
 * @export
 * @param {unknown} value
 * @returns true if value is a non null object
 */
export function isObject(value: unknown) {
    return typeof value === 'object' && value !== null;
}

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
export function removeFromArray<T>(arr: Array<T>, value: T, key?: keyof T) {
    const index = key ? arr.findIndex((item) => item[key] === value[key]) : arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/**
 * inserts an element into an array at the index position
 *
 * @export
 * @template T
 * @param {Array<T>} arr
 * @param {T} value element
 * @returns
 */
export function insertIntoArray<T>(arr: Array<T>, value: T, index: number) {
    if (index >= 0 && index < arr.length + 1) {
        arr.splice(index, 0, value);
    }
    return arr;
}

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
export function areArraysEqual<T>(arrayA: Array<T>, arrayB: Array<T>) {
    return (
        Array.isArray(arrayA) &&
        Array.isArray(arrayB) &&
        arrayA.length === arrayB.length &&
        arrayA.every((val, index) => val === arrayB[index])
    );
}

/**
 * generates GUIs using random values.
 *
 * @export
 * @returns
 */
export function guidGenerator() {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

/**
 * date compare function.
 * from https://codesandbox.io/s/optimistic-star-597qt?file=/demo.js:413-581
 * @export
 * @returns
 */
export function compareDate(a: Date, b: Date): number {
    if (!a && !b) return 0;
    if (!a) return -1;
    if (!b) return 1;

    const dateA = a.getTime();
    const dateB = b.getTime();
    if (dateA === dateB) {
        return 0;
    }
    return dateA < dateB ? -1 : 1;
}

/**
 * determines the latest date of all the given date values.
 *
 * @export
 * @param {Date[]} dates
 * @return {*}  {Date}
 */
export function getLatestDateof(dates: Date[]): Date | undefined {
    if (dates.length === 0) return undefined;
    let latest = dates[0];
    dates.forEach((date) => {
        if (compareDate(date, latest) > 1) {
            latest = date;
        }
    });
    return latest;
}

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
export function createPartialObject<T>(fullEntity: T, properties: (keyof T)[]): T {
    const result = {} as T;
    if (properties) {
        for (const prop of properties) {
            const propName = prop;
            result[propName] = fullEntity[propName];
        }
    }
    return result;
}

/**
 * same as <see>createPartialObject</see> but ensures the properties 'id' and 'optlock', which are copied anyway and not need to be included in the keys array.
 *
 * @export
 * @template T
 * @param {T} fullEntity
 * @param {(keyof T)[]} properties
 * @returns {T}
 */
export function createPartialWithIdAndOptLock<T extends { id?: string; optLock?: number }>(
    fullEntity: T,
    properties: (keyof T)[]
): T {
    const result = { id: fullEntity.id, optLock: fullEntity.optLock } as T;
    if (properties) {
        for (const prop of properties) {
            const propName = prop;
            result[propName] = fullEntity[propName];
        }
    }
    return result;
}

/**
 * Creates a deep clone of the data by serializing and deserializing the object.
 * Uses JSON.stringify.
 *
 * @export
 * @template T
 * @param {T} data
 * @returns {T}
 */
export function cloneData<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}

export function enumKeys<O extends Record<string, unknown>, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

/**
 * Creates a text file downloaded by the browser.
 *
 * @export
 * @param {string} text
 * @param {string} filename
 */
export function downloadTxtFile(text: string, filename: string) {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}
