export const HTTP_STATUS_CODES_TEXT = {
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    424: 'Failed Dependency',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
};

/**
 * see: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
export const HTTP_STATUS_CODES = {
    /** 200 */
    OK: 200,
    /** 201 */
    CREATED: 201,
    /** 202 */
    ACCEPTED: 202,
    /** 203 */
    NON_AUTHORITATIVE_INFORMATION: 203,
    /** 204 */
    NO_CONTENT: 204,
    /** 205 */
    RESET_CONTENT: 205,
    /** 206 */
    PARTIAL_CONTENT: 206,
    /** 300 */
    MULTIPLE_CHOICES: 300,
    /** 301 */
    MOVED_PERMANENTLY: 301,
    /** 302 */
    FOUND: 302,
    /** 303 */
    SEE_OTHER: 303,
    /** 304 */
    NOT_MODIFIED: 304,
    /** 305 */
    USE_PROXY: 305,
    /** 307 */
    TEMPORARY_REDIRECT: 307,
    /** 400 */
    BAD_REQUEST: 400,
    /** 401 */
    UNAUTHORIZED: 401,
    /** 402 */
    PAYMENT_REQUIRED: 402,
    /** 403 */
    FORBIDDEN: 403,
    /** 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. */
    NOT_FOUND: 404,
    /** 405 */
    METHOD_NOT_ALLOWED: 405,
    /** 406 */
    NOT_ACCEPTABLE: 406,
    /** 407 */
    PROXY_AUTHENTICATION_REQUIRED: 407,
    /** 408 */
    REQUEST_TIMEOUT: 408,
    /** 409 */
    CONFLICT: 409,
    /** 410 */
    GONE: 410,
    /** 411 */
    LENGTH_REQUIRED: 411,
    /** 412 */
    PRECONDITION_FAILED: 412,
    /** 413 */
    REQUEST_ENTITY_TOO_LARGE: 413,
    /** 414 */
    REQUEST_URI_TOO_LONG: 414,
    /** 415 */
    UNSUPPORTED_MEDIA_TYPE: 415,
    /** 416 */
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    /** 417 */
    EXPECTATION_FAILED: 417,
    /** 422 - The server understands the request, and the syntax is correct (thus a 400 status code is inappropriate), but it was unable to process the contained instructions */
    UNPROCESSABLE_ENTITY: 422,
    /** 424 -The request failed because it depended on another request and that request failed (e.g., a PROPPATCH). */
    FAILED_DEPENDENCY: 424,
    /** 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. */
    INTERNAL_SERVER_ERROR: 500,
    /** 501 */
    NOT_IMPLEMENTED: 501,
    /** 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.. */
    BAD_GATEWAY: 502,
    /** 503 */
    SERVICE_UNAVAILABLE: 503,
    /** 504 */
    GATEWAY_TIMEOUT: 504,
    /** 505 */
    HTTP_VERSION_NOT_SUPPORTED: 505,
};
