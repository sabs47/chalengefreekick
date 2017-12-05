import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import freducers from './FReducerservice'

const AppReducers = combineReducers({
    freducers,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;