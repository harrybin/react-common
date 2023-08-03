import { BaseEntity } from './BaseEntity';
import { LoadDataPropsAsync, UpdateDataPropsAsync } from './fetchCommandTypes';
export declare function createCommonHeaders(eTag?: string, oidcBaerer?: string): Headers;
export declare function useFetch<T extends BaseEntity | {} | null>(): {
    loadDataAsync: (props: LoadDataPropsAsync) => Promise<T[] | T | undefined>;
    updateDataAsync: (props: UpdateDataPropsAsync<T>) => Promise<T>;
    loadStaticDataAsync: (props: LoadDataPropsAsync) => Promise<T>;
    resetStaticData: (query: string, customQueryParam?: {
        name: string;
        value: string;
    }) => void;
};
//# sourceMappingURL=fetchCommands.d.ts.map