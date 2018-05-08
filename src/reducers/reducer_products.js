import _ from 'lodash';
import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data.data, 'id');
    case SEARCH_PRODUCTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}