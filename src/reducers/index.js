import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import ReducerProducts from './reducer_products';
import ReducerAuth from './reducer_auth';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  products: ReducerProducts,
  news: ReducerNews,
  auth: ReducerAuth,
  router: routerReducer
});
export default rootReducer;