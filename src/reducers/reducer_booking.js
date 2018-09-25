import _ from 'lodash';
import { POST_BOOKING, BOOKING_FAIL } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function (state = {}, action) {
    
    switch (action.type) {
        case POST_BOOKING:                        
            return {
                success: action.payload.data != undefined ? true : false,
                message:  action.payload.data == undefined ? action.payload.response.data.message : ''
            }
        case BOOKING_FAIL:            
            return {
                message: action.payload.error != undefined ? action.payload.message : ''
            }
        case LOCATION_CHANGE:
            return {}
        default:
            return state;
    }
}