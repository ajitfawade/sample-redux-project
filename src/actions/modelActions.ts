import { BaseModel } from '../Models/BaseModel';
import { dispatch } from '../utilities/generalUtils';
import { SAVE_INSTANCE, UPDATE_INSTANCE, REMOVE_INSTANCE } from '../constants/action-types';

export function saveInstance(currentInstance: BaseModel<{}>, key: string, identifier?: string) {
    return dispatch({
        type: (identifier) ? `${SAVE_INSTANCE}/${identifier}` : `${SAVE_INSTANCE}`,
        currentInstance,
        key
    });
}

export function updateInstance(currentInstance: BaseModel<{}>, key: string, identifier?: string) {
    return dispatch({
        type: (identifier) ? `${UPDATE_INSTANCE}/${identifier}` : `${UPDATE_INSTANCE}`,
        currentInstance,
        key
    });
}

export function removeInstance(key: string) {
    return dispatch({
        type: REMOVE_INSTANCE,
        key,
    });
}
