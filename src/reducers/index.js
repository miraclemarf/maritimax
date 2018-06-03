import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import ReducerProducts from './reducer_products';
import ReducerBooking from './reducer_booking';
import ReducerFilter from './reducer_filter';
import ReducerAuth from './reducer_auth';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  products: ReducerProducts,
  news: ReducerNews,
  auth: ReducerAuth,
  booking: ReducerBooking,
  filter: ReducerFilter,
  router: routerReducer,
});
export default rootReducer;