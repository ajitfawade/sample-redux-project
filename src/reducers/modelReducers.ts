import { Map, OrderedMap } from 'immutable';
import { SAVE_INSTANCE, UPDATE_INSTANCE, REMOVE_INSTANCE } from '../constants/action-types';
import { BaseModel } from '../Models/BaseModel';

export function modelReducers(state = OrderedMap<string, BaseModel<{}>>(), action) {
    switch (action.type) {
        case SAVE_INSTANCE: {
            let instance = action.currentInstance;
            return state.set(action.key, instance);
        }
        case UPDATE_INSTANCE: {
            let instance = action.currentInstance;
            return state.update(action.key, (instance) => instance);
        }
        case REMOVE_INSTANCE: {
            return state.delete(action.key);
        }
        default:
            return state;
    }
}
