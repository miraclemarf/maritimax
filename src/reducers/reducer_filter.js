
import { GET_CHARTERTYPE, GET_MODELVESSEL, GET_CITIES } from '../actions/actions_dropdown';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_CHARTERTYPE:
            return {
                ...state,
                charter: action.payload.data
            }
        case GET_MODELVESSEL:
            return {
                ...state,
                model: action.payload.data
            }
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload.data
            }
        default:
            return state;
    }
}