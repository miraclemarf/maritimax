import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
export default function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.REGISTER_FAILURE:
            return {};

        case userConstants.FORGOT_PASSWORD_SUCCESS:
            return {
                forgot: action.user
            };
        case userConstants.FORGOT_PASSWORD_FAILURE:
            return {
                error: action.error
            };

        case userConstants.RESET_PASSWORD_SUCCESS:
            return {
                reset: action.user
            };
        case userConstants.RESET_PASSWORD_FAILURE:
            return {
                error: action.error
            };

        case userConstants.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                change: action.user
            };
        case userConstants.CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                error: action.error
            };
        case userConstants.LOGOUT:
            return {};
        case userConstants.GET_USER:
            return {
                loggedIn: true,
                userData: action.user
            };
        default:
            return state
    }
}