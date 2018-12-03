import { removeInstance, saveInstance, updateInstance } from '../actions/modelActions';
import { store } from '../store';

export class BaseModel<T> {

    static resource: string;

    resource: string;

    constructor(public props: T & {
        id?: string
    }) {
        this.resource = this.constructor.resource;
        this.props = props;
    }

    getStoreKey(): string {
        return `${this.resource}${this.props.id}`;
    }

    $save(identifer?: string) {
        saveInstance(this, this.getStoreKey(), identifer);
        return this;
    }

    $update(identifier?: string) {
        updateInstance(this, this.getStoreKey(), identifier);
    }

    $remove(): void {
        removeInstance(this.getStoreKey());
    }

    static get(id: string, state = store.getState()) {
        let models = state.models;
        let storeKey = `${this.resource}${id}`;
        return models.toJS ? models.get(storeKey) : models[storeKey];
    }

    static list(state = store.getState()) {
        return state.models.filter(instance => instance.resource === this.resource).toArray();
    }

    static saveAll<T extends BaseModel<{}>>(instances: T[]) {
        instances.map((instance) => {
            saveInstance(instance, instance.getStoreKey());
        });
    }

    static deleteAll<T extends BaseModel<{}>>(instances = this.list()) {
        instances.forEach((inst) => {
            removeInstance(inst.getStoreKey());
        });
    }
}
