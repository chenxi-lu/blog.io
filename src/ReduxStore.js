import { createStore } from 'redux';
import Reducer from '../src/Reducers/CounterReducer';

const initialState = {
    counterData: 1
}
const store = createStore(Reducer, initialState);

export default store;