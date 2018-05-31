import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { history } from '../helpers';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const middleware = routerMiddleware(history)


export const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
        promise,
        middleware
        //loggerMiddleware
    )
);

