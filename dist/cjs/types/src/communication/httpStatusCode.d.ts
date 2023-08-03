export declare const HTTP_STATUS_CODES_TEXT: {
    200: string;
    201: string;
    202: string;
    203: string;
    204: string;
    205: string;
    206: string;
    300: string;
    301: string;
    302: string;
    303: string;
    304: string;
    305: string;
    307: string;
    400: string;
    401: string;
    402: string;
    403: string;
    404: string;
    405: string;
    406: string;
    407: string;
    408: string;
    409: string;
    410: string;
    411: string;
    412: string;
    413: string;
    414: string;
    415: string;
    416: string;
    417: string;
    424: string;
    500: string;
    501: string;
    502: string;
    503: string;
    504: string;
    505: string;
};
/**
 * see: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
export declare const HTTP_STATUS_CODES: {
    /** 200 */
    OK: number;
    /** 201 */
    CREATED: number;
    /** 202 */
    ACCEPTED: number;
    /** 203 */
    NON_AUTHORITATIVE_INFORMATION: number;
    /** 204 */
    NO_CONTENT: number;
    /** 205 */
    RESET_CONTENT: number;
    /** 206 */
    PARTIAL_CONTENT: number;
    /** 300 */
    MULTIPLE_CHOICES: number;
    /** 301 */
    MOVED_PERMANENTLY: number;
    /** 302 */
    FOUND: number;
    /** 303 */
    SEE_OTHER: number;
    /** 304 */
    NOT_MODIFIED: number;
    /** 305 */
    USE_PROXY: number;
    /** 307 */
    TEMPORARY_REDIRECT: number;
    /** 400 */
    BAD_REQUEST: number;
    /** 401 */
    UNAUTHORIZED: number;
    /** 402 */
    PAYMENT_REQUIRED: number;
    /** 403 */
    FORBIDDEN: number;
    /** 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. */
    NOT_FOUND: number;
    /** 405 */
    METHOD_NOT_ALLOWED: number;
    /** 406 */
    NOT_ACCEPTABLE: number;
    /** 407 */
    PROXY_AUTHENTICATION_REQUIRED: number;
    /** 408 */
    REQUEST_TIMEOUT: number;
    /** 409 */
    CONFLICT: number;
    /** 410 */
    GONE: number;
    /** 411 */
    LENGTH_REQUIRED: number;
    /** 412 */
    PRECONDITION_FAILED: number;
    /** 413 */
    REQUEST_ENTITY_TOO_LARGE: number;
    /** 414 */
    REQUEST_URI_TOO_LONG: number;
    /** 415 */
    UNSUPPORTED_MEDIA_TYPE: number;
    /** 416 */
    REQUESTED_RANGE_NOT_SATISFIABLE: number;
    /** 417 */
    EXPECTATION_FAILED: number;
    /** 422 - The server understands the request, and the syntax is correct (thus a 400 status code is inappropriate), but it was unable to process the contained instructions */
    UNPROCESSABLE_ENTITY: number;
    /** 424 -The request failed because it depended on another request and that request failed (e.g., a PROPPATCH). */
    FAILED_DEPENDENCY: number;
    /** 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. */
    INTERNAL_SERVER_ERROR: number;
    /** 501 */
    NOT_IMPLEMENTED: number;
    /** 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.. */
    BAD_GATEWAY: number;
    /** 503 */
    SERVICE_UNAVAILABLE: number;
    /** 504 */
    GATEWAY_TIMEOUT: number;
    /** 505 */
    HTTP_VERSION_NOT_SUPPORTED: number;
};
//# sourceMappingURL=httpStatusCode.d.ts.map