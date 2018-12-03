import { dispatch } from '../utilities/generalUtils';

export function executePromiseAction(promise: Promise<{}>, identifier: string) {
    return dispatch({
        type: `${identifier}/LOADING`,
        payload: {
            promise
        },
        meta: {
            identifier
        }
    });
}

export function setLoading(identifier: string) {
    return dispatch({
        type: `${identifier}/SET_LOADING`,
        meta: {
            identifier,
        }
    });
}

export function setSuccess(identifier: string) {
    return dispatch({
        type: `${identifier}/SET_SUCCESS`,
        meta: {
            identifier,
        }
    });
}

export function setError(identifier: string) {
    return dispatch({
        type: `${identifier}/SET_ERROR`,
        meta: {
            identifier,
        }
    });
}
