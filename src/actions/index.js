import axios from 'axios';
import { userService } from '../services';
import { history } from '../helpers';
import { userConstants } from '../constants';
export const FETCH_NEWS = 'fetch_news';
export const FETCH_MORENEWS = 'fetch_morenews';
export const FETCH_PRODUCTS = 'fetch_products';
export const SEARCH_PRODUCTS = 'search_products';
export const SEARCHMORE_PRODUCTS = 'searchmore_products';
export const GET_PRODUCT = 'get_product';

const HOST_NAME = window && window.location && window.location.hostname;
const BASE_API = `http://${HOST_NAME}:3001`;
const PROD_API = 'http://siapayangnanya.com/api';



export function fetch_news() {
  const request = axios.get(`${PROD_API}/posts/paginate/3`);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
export function fetch_morenews() {
  const request = axios.get(`${BASE_API}/articlesMore`);
  return {
    type: FETCH_MORENEWS,
    payload: request
  };
}

export function fetch_products() {
  const request = axios.get(`${PROD_API}/cargos/paginate/3`);
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function search_products(param, page) {
  const request = axios.get(`${PROD_API}/cargos/filter`, {
    params: {
      booking_type: param.booking_type,
      city: param.city,
      page: page
    }
  });
  return {
    type: SEARCH_PRODUCTS,
    payload: request
  };
}


export function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));
    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          location.reload();
        },
        error => {
          dispatch(failure(error));
          //dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
export function logout() {
  userService.logout();
  history.push('/');
  return { type: userConstants.LOGOUT };
}

export function register(username, email, password) {
  return dispatch => {
    //dispatch(request({ username }));
    userService.register(username, email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          //dispatch(alertActions.error(error));
        }
      );
  };

  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function get_user() {
  return dispatch => {
    //dispatch(request({ username }));
    userService.getUser()
      .then(
        user => {
          dispatch(success(user));
          //console.log(user);
          //history.push('/');
        },
        error => {
          //console.log(error);
          //dispatch(failure(error));
          //dispatch(alertActions.error(error));
        }
      );
  };

  function success(user) { return { type: userConstants.GET_USER, user } }
}

export function get_product(id) {
  const request = axios.get(`${PROD_API}/cargo/${id}`);
  return {
    type: GET_PRODUCT,
    payload: request
  };
}