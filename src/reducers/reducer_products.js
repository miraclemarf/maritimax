import _ from 'lodash';
import { FETCH_PRODUCTS, SEARCH_PRODUCTS, GET_PRODUCT } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function (state = {}, action) {
  //console.log(action.type);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data.data, 'id');
    case SEARCH_PRODUCTS:
      return action.payload.data
    case GET_PRODUCT:
      return action.payload.data.data
    case LOCATION_CHANGE:
      return {}
    default:
      return state;
  }
}