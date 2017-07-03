import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import tableConstructor from './tableConstructor'

const allReducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    tableConstructor
});

export default allReducers;