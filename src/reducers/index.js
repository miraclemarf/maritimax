import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import ReducerProducts from './reducer_products';
import ReducerAuth from './reducer_auth';

const rootReducer = combineReducers({
  products: ReducerProducts,
  news: ReducerNews,
  auth: ReducerAuth
});
export default rootReducer;