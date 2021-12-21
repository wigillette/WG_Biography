import {createStore} from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // Reducer
        initialState // Our initial State
    );

    return store;
}