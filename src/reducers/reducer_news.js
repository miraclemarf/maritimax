import _ from 'lodash';
import { FETCH_NEWS, FETCH_MORENEWS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_MORENEWS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}