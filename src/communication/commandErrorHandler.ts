export type FetchErrorHandler = ((resp: Response) => void) | undefined;
export type FetchExceptionHandler = ((err: Error) => void) | undefined;

var _globalFetchErrorHandler: FetchErrorHandler = undefined; // for non 2XX status codes
var _globalFetchExceptionHandler: FetchExceptionHandler = undefined; // for errors/exception like "Failed to fetch" you get when e.g. the preflight call (CORS) fails.

/**
 * Method for registering global error/exception handlers/middleware on the fetch commands of the useFetch hook.
 *
 * @interface IRegisterGlobalFetchHandler
 */
interface IGlobalFetchHandler {
    /**
     * Global error handler method for handling non 2XX status codes.
     * Take care, these are static global assignments, so settings these mir than once may cause undesirable behavior.
     *
     * @type {FetchErrorHandler}
     * @memberof IRegisterGlobalFetchHandler
     */
    errorHandler?: FetchErrorHandler;
    /**
     * Global fetch exception hanldler for handling exception like 'Failed to fetch' (occuring when the CORS pre-flight call fails).
     *
     * @type {FetchExceptionHandler}
     * @memberof IRegisterGlobalFetchHandler
     */
    exceptionHanlder?: FetchExceptionHandler;
}

export default function registerGlobalFetchErrorHandler(handler: IGlobalFetchHandler) {
    if (handler.errorHandler) _globalFetchErrorHandler = handler.errorHandler;
    if (handler.exceptionHanlder) _globalFetchExceptionHandler = handler.exceptionHanlder;
}

export function getRegisteredGlobalFetchErrorHandler(): IGlobalFetchHandler {
    return { errorHandler: _globalFetchErrorHandler, exceptionHanlder: _globalFetchExceptionHandler };
}
