import { createStore, combineReducers } from 'redux';
import CounterReducer from '../src/Reducers/CounterReducer';
import HeaderReducer from '../src/Reducers/HeaderReducer';

const initialState = {
    counterData: 66,
    currentTab: 'index'
}
const reducers = combineReducers({CounterReducer, HeaderReducer})
const store = createStore(reducers, initialState);

export default store;