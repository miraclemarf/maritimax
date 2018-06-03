
import { GET_CHARTERTYPE } from '../actions/actions_dropdown';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_CHARTERTYPE:
            return {
                modelVessel: action.payload.data
            }
        default:
            return state;
    }
}