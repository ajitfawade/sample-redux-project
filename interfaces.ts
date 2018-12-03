import * as Immutable from 'immutable';
import { BaseModel } from './src/Models/BaseModel';
import { IAsyncState } from './src/components/ReusableComponents/Async';

export interface IState {
    models: Immutable.Map<string, BaseModel<{}>>;
    loading: Immutable.Map<string, IAsyncState>;
}
