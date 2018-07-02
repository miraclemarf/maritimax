import _ from 'lodash';
import { FETCH_NEWS, FETCH_ALLNEWS, GET_NEWS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload.data
    case FETCH_ALLNEWS:
      return action.payload.data
    case GET_NEWS:
      return action.payload.data
    default:
      return state;
  }
}