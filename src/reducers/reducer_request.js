import _ from 'lodash';
import { POST_REQUEST } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function (state = {}, action) {
    //console.log(action.type);
    switch (action.type) {
        case POST_REQUEST:
            return {
                success: action.payload.data != undefined ? true : false,
            }
        case LOCATION_CHANGE:
            return {}
        default:
            return state;
    }
}