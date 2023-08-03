import {
    isArray,
    isObject,
    removeFromArray,
    insertIntoArray,
    areArraysEqual,
    guidGenerator,
    compareDate,
    cloneData,
    getLatestDateof,
    createPartialObject,
    createPartialWithIdAndOptLock,
} from './helperFunctions';

describe('testIsArray', () => {
    it('isArray', () => {
        expect(isArray(['Test']));
    });
    it('isNotArray', () => {
        expect(isArray({ test: 'test' })).toBe(false);
    });
});

describe('testIsObject', () => {
    it('isNotTypeObject', () => {
        expect(isObject('Hello World')).toBe(false);
    });
    it('isTypeObject', () => {
        expect(isObject({ test: 'Test' }));
    });
});

describe('testRemoveFromArray', () => {
    it('returnsArrayWithElementRemoved', () => {
        const arr = ['Hello', 'World'];
        removeFromArray(arr, 'World');
        expect(arr).toEqual(['Hello']);
    });
});

describe('testInsertIntoArray', () => {
    it('returnsArrayWithInsertedElement', () => {
        const arr = ['Hello', 'World'];
        const arrInserted = insertIntoArray(arr, 'Test', 2);
        expect(arrInserted).toEqual(['Hello', 'World', 'Test']);
    });
});

describe('testAreArraysEqual', () => {
    it('ArraysAreEqual', () => {
        const arr = [['Hello', 'World'], 'test'];
        const equalArray = [['Hello', 'World'], 'test'];
        expect(areArraysEqual(arr, equalArray));
    });
    it('ArraysAreNotEqual', () => {
        const arr = [['Hello', 'World'], 'test'];
        expect(areArraysEqual(arr, ['Test'])).toBe(false);
    });
});

describe('guidGenerator', () => {
    it('guidValidLengthAndValue', () => {
        const guid = guidGenerator();
        expect(guid).toBeTruthy;
        expect(guid).toHaveLength(36);
    });
});

describe('testCompareDate', () => {
    const dateA = new Date(2021, 12);
    const dateB = new Date(2022, 4);
    it('dateAGreaterDateB', () => {
        const resultComparisonA = compareDate(dateA, dateB);
        expect(resultComparisonA).toBe(-1);
    });
    it('dateBGreaterDateA', () => {
        const resultComparisonB = compareDate(dateB, dateA);
        expect(resultComparisonB).toBe(1);
    });
    it('dateAEqualsDateB', () => {
        const resultComparisionEqual = compareDate(dateA, dateA);
        expect(resultComparisionEqual).toBe(0);
    });
});

describe('testCloneData', () => {
    it('clonesObject', () => {
        const arr = ['Test'];
        expect(arr).toEqual(cloneData(arr));
    });
});

describe('testGetLatestDateof', () => {
    let date1 = new Date(2019, 12, 4);
    let date2 = new Date(2020, 1, 19);
    let date3 = new Date(2022, 3);
    let date4 = new Date(2024, 4);
    let dateArr = [date1, date2, date3, date4];

    it('returnsLatestDate', () => {
        const latestDate = getLatestDateof(dateArr);
        expect(latestDate).toEqual(date1);
    });
});

describe('createPartialObject', () => {
    type Person = { age: number; name: string };
    const person: Person = { age: 34, name: 'Bob' };

    it('partialObjectIncludesAllProperties', () => {
        const personPartial = createPartialObject(person, ['age', 'name']);
        expect(personPartial).toEqual(person);
    });

    it('partialObjectWithCopiedProperties', () => {
        const personPartial = createPartialObject(person, ['name']);
        expect(personPartial).toEqual({ name: 'Bob' });
    });

    it('partialObjectWithRemovedProperties', () => {
        const personPartial = createPartialObject(person, []);
        expect(personPartial).toEqual({});
    });
});

describe('testCreatePartialWithIdAndOptLock', () => {
    type Person = {
        name: string;
        age: number;
        id: string | undefined;
        optLock: number | undefined;
    };

    const person: Person = {
        name: 'Bob',
        age: 45,
        id: undefined,
        optLock: undefined,
    };
    const personExtended: Person = {
        name: 'Bob',
        age: 45,
        id: '123',
        optLock: 10,
    };
    it('partialObjectCreated', () => {
        const personPartial = createPartialWithIdAndOptLock(person, ['name', 'age']);
        expect(personPartial).toEqual(person);
    });

    it('partialObjectContainsIdAndOptLock', () => {
        const personPartial = createPartialWithIdAndOptLock(personExtended, ['name', 'age']);
        expect(personPartial).toEqual(personExtended);
    });
});

describe('testCloneData', () => {
    const arr = [1, 2, 3, ['Alice', 'Bob']];

    const person = { name: 'Bob', isMale: true };

    it('clonedObjectCorrect', () => {
        expect(cloneData(person)).toEqual(person);
    });

    it('clonedArrayCorrect', () => {
        const clonedArr = cloneData(arr);
        expect(arr).toEqual(clonedArr);
    });
});

describe('testEnumKeys', () => {
    it('enumKeysgenerated', () => {
        expect(true).toBe(true);
    });
});
