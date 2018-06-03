import _ from 'lodash';
import { POST_BOOKING } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function (state = {}, action) {
    //console.log(action.type);
    switch (action.type) {
        case POST_BOOKING:
            return {
                success: action.payload.data != undefined ? true : false,
            }
        case LOCATION_CHANGE:
            return {}
        default:
            return state;
    }
}