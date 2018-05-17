import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();



export const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
        promise
        //loggerMiddleware
    )
);

