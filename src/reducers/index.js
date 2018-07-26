import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import ReducerProducts from './reducer_products';
import ReducerBooking from './reducer_booking';
import ReducerRequest from './reducer_request';
import ReducerFilter from './reducer_filter';
import ReducerAuth from './reducer_auth';
import ReducerAlert from './reducer_alert';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  products: ReducerProducts,
  news: ReducerNews,
  auth: ReducerAuth,
  booking: ReducerBooking,
  request: ReducerRequest,
  filter: ReducerFilter,
  alert: ReducerAlert,
  router: routerReducer
});
export default rootReducer;