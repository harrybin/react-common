/// <reference types="react" />
export interface UrlProps {
    queryString: string;
}
export interface CustomHeader {
    name: string;
    value: string;
}
export interface StaticDataProps<T> extends UrlProps {
    setDataCallback: (data: T) => void;
}
/**
 * Tye for erroer response callsbacks.
 * @errorResponse ErrorResponse object
 * @originalError response data is either partial data [Record<string, unknown>], is either a problem JSON [ProblemInformation], old be error json or plain text [ErrorResponseType]
 */
export type ErrorResponseHandler = (errorResponse: Response) => void;
export interface DataProps extends UrlProps {
    isLoading?: boolean;
    setIsLoadingCallback?: (isLoading: boolean) => void;
    handleErrorCallback?: ErrorResponseHandler;
    handleExceptionCallback?: (e: Error) => void;
    handleCustomErrorData?: (data: Record<string, unknown>) => void;
}
export interface LoadDataPropsAsync extends DataProps {
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
export interface LoadDataProps<T> extends LoadDataPropsAsync {
    setDataCallback: (data: T) => void;
}
export type RestMethod = 'PUT' | 'PATCH' | 'POST' | 'DELETE';
export interface UpdateDataPropsAsync<T> extends DataProps {
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
export interface UpdateDataProps<T> extends UpdateDataPropsAsync<T> {
    setDataCallback?: (data: T, eTag: number) => void;
}
//# sourceMappingURL=fetchCommandTypes.d.ts.map