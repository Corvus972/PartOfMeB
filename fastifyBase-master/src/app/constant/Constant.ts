export const HTTP = {
    OK:  200,
    CREATED: 201,
    NO_CONTENT:  202,
    UNAUTHORIZED: { message:{errorMessage:'Token expired or invalid', type: 'UNAUTHORIZED'}, status: 401 },
    FORBIDDEN: { message: {errorMessage:'Token is valid but don\'t have the required permissions for this request', type: 'FORBIDDEN'}, status: 403 },
    BAD_REQUEST: { message: {errorMessage:'Bad Request', type: 'BAD_REQUEST'}, status: 400 },
    SERVICE_UNAVAILABLE: { message: {errorMessage:'Service Unavailable', type: 'SERVICE_UNAVAILABLE'}, status: 503 },
}

export const HEADERS = {
    authorization: "Authorization",
    bearer: "Bearer "
}