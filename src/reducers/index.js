import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import ReducerProducts from './reducer_products';

const rootReducer = combineReducers({
  products: ReducerProducts,
  news: ReducerNews,
});
export default rootReducer;