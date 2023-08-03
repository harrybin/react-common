import { BaseEntity } from './BaseEntity';
import { useOidcBaerer } from './OidcBarerProxyProvider';
import { getRegisteredGlobalFetchErrorHandler } from './commandErrorHandler';
import { ErrorResponseHandler, LoadDataPropsAsync, UpdateDataPropsAsync } from './fetchCommandTypes';
import { HTTP_STATUS_CODES } from './httpStatusCode';

/*
 * micro-Service data.
 * Swagger URL:   baseUrl + '/'+ <service> + '/swagger-ui.html'
 */
export function createCommonHeaders(eTag?: string, oidcBaerer?: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (oidcBaerer) headers.append('Authorization', 'Bearer ' + oidcBaerer);
    if (eTag) headers.append('If-Match', '"' + eTag + '"');
    return headers;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalStaticResponseDict: { [name: string]: Promise<any> } = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const staticDataDict: { [name: string]: any } = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export function useFetch<T extends BaseEntity | {} | null>() {
    const oidcBaerer = useOidcBaerer();
    const errorHandler = getRegisteredGlobalFetchErrorHandler();

    //some kind of error middleware function. For detailed implementation see recon project
    function createErrorResponse(response: Response, handleErrorCallback?: ErrorResponseHandler) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/problem+json') !== -1) {
            response
                .clone()
                .json()
                .then((problemJson) => {
                    if (handleErrorCallback) handleErrorCallback(response);
                    else {
                        if (errorHandler.errorHandler) errorHandler.errorHandler(response);
                        else throw new Error(problemJson);
                    }
                });
        }
        if (response.status < 200 || response.status > 299) {
            if (handleErrorCallback) handleErrorCallback(response);
            else {
                if (errorHandler.errorHandler) errorHandler.errorHandler(response);
                else throw new Error(response.statusText);
            }
        }
    }

    /**
     * Gets the data from a partial data response of an problem error type. (usually used for HTTP status code 206: PARTIAL_CONTENT)
     *
     * @export
     * @template T
     * @param {T} responseJson
     * @param {(message: SnackbarMessage, options?: OptionsObject) => SnackbarKey} enqueueSnackbar
     * @return {*}  {(T | T[])}
     */
    function partialDataProblemTypeErrorHandler<T extends Record<string, unknown>>(
        responseJson: T,
        handleCustomErrorData?: (data: Record<string, unknown>) => void
    ): T | T[] {
        if (!responseJson) return responseJson;
        handleCustomErrorData && handleCustomErrorData(responseJson);
        return responseJson;
    }

    function ensureLangUrlParam(url: string, customQueryParam: { name: string; value: string }): string {
        const teststr = `${customQueryParam.name}=`;
        if (url.indexOf(teststr) <= 0) {
            if (url.indexOf('?') <= 0) return `${url}?${customQueryParam.name}=${customQueryParam.value}`;
            else return `${url}&${customQueryParam.name}=${customQueryParam.value}`;
        }
        return url;
    }

    async function loadDataAsync(props: LoadDataPropsAsync): Promise<T[] | T | undefined> {
        if (props.isLoading) return undefined;
        props.setIsLoadingCallback && props.setIsLoadingCallback(true);
        try {
            const queryString: string = props.customQueryParam
                ? ensureLangUrlParam(props.queryString, props.customQueryParam)
                : props.queryString;
            if (queryString === props.lastQuery) return undefined;

            const headers = createCommonHeaders(undefined, oidcBaerer);
            props.customHeaderList?.forEach((customHeader) => headers.append(customHeader.name, customHeader.value));
            const result = await fetch(queryString, {
                method: 'GET',
                headers: headers,
                cache: 'no-store',
            })
                .then((response) => {
                    if (!response.ok) {
                        if (response.status === HTTP_STATUS_CODES.UNAUTHORIZED && props.setErrorResponse) {
                            props.setErrorResponse(response.status);
                            return undefined;
                        } else {
                            createErrorResponse(response, props.handleErrorCallback);
                            return undefined;
                        }
                    }
                    return response;
                })
                .then((response) => {
                    if (response) {
                        props.setResponseHeaders && props.setResponseHeaders(response.headers);
                        props.customResponseHandler && props.customResponseHandler(response);
                        return response.json();
                    } else return undefined;
                })
                .then((data) => {
                    if (data) {
                        return partialDataProblemTypeErrorHandler(data, props.handleCustomErrorData);
                    } else return undefined;
                })
                .catch((ex) => {
                    props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                    if (props.handleExceptionCallback) props.handleExceptionCallback(ex);
                    else {
                        if (errorHandler.exceptionHanlder) errorHandler.exceptionHanlder(ex);
                        else throw ex;
                    }
                });

            props.setLastQueryCallBack && props.setLastQueryCallBack(queryString);
            props.setIsLoadingCallback && props.setIsLoadingCallback(false);
            return result;
        } finally {
            props.setIsLoadingCallback && props.setIsLoadingCallback(false);
        }
    }

    async function updateDataAsync(props: UpdateDataPropsAsync<T>): Promise<T> {
        const queryString: string = props.customQueryParam
            ? ensureLangUrlParam(props.queryString, props.customQueryParam)
            : props.queryString;
        if (!props.method) props.method = 'PUT';
        // eslint-disable-next-line no-prototype-builtins
        if (props.eTag === undefined && props.data?.hasOwnProperty('optLock')) {
            props.eTag = (props.data as BaseEntity).optLock as number;
        }
        props.setIsLoadingCallback && props.setIsLoadingCallback(true);

        const headers = createCommonHeaders(props.eTag?.toString(), oidcBaerer);
        props.customHeaderList?.forEach((customHeader) => headers.append(customHeader.name, customHeader.value));
        return fetch(queryString, {
            method: props.method,
            headers: headers,
            body: JSON.stringify(props.data),
        })
            .then((response) => {
                if (!response.ok) {
                    createErrorResponse(response, props.handleErrorCallback);
                    props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                    return false;
                }
                if (props.noResultExpected) return true;
                props.customResponseHandler && props.customResponseHandler(response);
                //special handling for DELETE request, usually only give status 200 without any data
                if (props.method === 'DELETE' || !props.data) {
                    return response.json().then((json) => json ?? true);
                }
                const eTagHeader = response.headers.get('eTag');
                if (eTagHeader) props.eTag = parseInt(eTagHeader.replace('"', ''));
                props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                return response.json();
            })
            .then((data) => {
                if (data) {
                    if (data.status && data.status !== 200) {
                        props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                    }
                    (props.data as BaseEntity).optLock = (data as BaseEntity).optLock;
                    return partialDataProblemTypeErrorHandler(data);
                }
                props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                return undefined;
            })
            .catch((ex) => {
                props.setIsLoadingCallback && props.setIsLoadingCallback(false);
                props.handleExceptionCallback && props.handleExceptionCallback(ex);
                return undefined;
            });
    }

    /// ##########   static data loader ###########

    /**
     * static data is cached locally cached in a global dictionary
     *
     * @param {UrlProps<T>} props
     */
    async function loadStaticDataAsync(props: LoadDataPropsAsync): Promise<T> {
        const queryString: string = props.customQueryParam
            ? ensureLangUrlParam(props.queryString, props.customQueryParam)
            : props.queryString;
        if (staticDataDict[queryString]) {
            return Promise.resolve(staticDataDict[queryString]);
        }

        if (!globalStaticResponseDict[queryString]) {
            globalStaticResponseDict[queryString] = loadDataAsync(props);
        }
        globalStaticResponseDict[queryString].then((result) => (staticDataDict[queryString] = result));
        return globalStaticResponseDict[queryString];
    }

    function resetStaticData(query: string, customQueryParam?: { name: string; value: string }) {
        const queryString: string = customQueryParam ? ensureLangUrlParam(query, customQueryParam) : query;
        delete staticDataDict[queryString];
        delete globalStaticResponseDict[queryString];
    }

    return {
        loadDataAsync,
        updateDataAsync,
        loadStaticDataAsync,
        resetStaticData,
    };
}
