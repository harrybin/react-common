export type FetchErrorHandler = ((resp: Response) => void) | undefined;
export type FetchExceptionHandler = ((err: Error) => void) | undefined;
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
     * Global fetch exception handler for handling exception like 'Failed to fetch' (occuring when the CORS pre-flight call fails).
     *
     * @type {FetchExceptionHandler}
     * @memberof IRegisterGlobalFetchHandler
     */
    exceptionHanlder?: FetchExceptionHandler;
}
export default function registerGlobalFetchErrorHandler(handler: IGlobalFetchHandler): void;
export declare function getRegisteredGlobalFetchErrorHandler(): IGlobalFetchHandler;
export {};
//# sourceMappingURL=commandErrorHandler.d.ts.map