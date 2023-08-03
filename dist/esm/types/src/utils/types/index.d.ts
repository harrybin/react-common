/// <reference types="react" />
export type SetStateWithCallback<T> = (data: React.SetStateAction<T>, callback?: (value: any) => void) => void;
export type DataContextType<T> = [data: T, setData: SetStateWithCallback<T>];
//# sourceMappingURL=index.d.ts.map