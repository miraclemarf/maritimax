import axios from 'axios';

import moment from 'moment';
import { userService } from '../services';
import { history } from '../helpers';
import { authHeader } from '../helpers';
import { userConstants } from '../constants';
export const FETCH_NEWS = 'fetch_news';
export const FETCH_ALLNEWS = 'fetch_allnews';
export const FETCH_PRODUCTS = 'fetch_products';
export const SEARCH_PRODUCTS = 'search_products';
export const SEARCHMORE_PRODUCTS = 'searchmore_products';
export const GET_PRODUCT = 'get_product';
export const POST_BOOKING = 'post_booking';

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
export function fetch_allnews(page) {
  const request = axios.get(`${PROD_API}/posts/paginate/9`, {
    params: {
      page: page
    }
  });
  return {
    type: FETCH_ALLNEWS,
    payload: request
  };
}

export function fetch_products() {
  const request = axios.get(`${PROD_API}/cargos/filter`, {
    params: { limit: '3' }
  });
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function search_products(param, page) {
  let date = undefined
  if (param.available_date != undefined) {
    date = moment(param.available_date).format('YYYY-MM-DD') + ' 00:00:00';
  }
  console.log(date);
  const request = axios.get(`${PROD_API}/cargos/filter`, {
    params: {
      booking_type: param.booking_type,
      city: param.city,
      description: param.description,
      available_capacity: param.available_capacity,
      available_date: date,
      charter_type_id: param.charter_type_id,
      cargo_model_id: param.cargo_model_id,
      year_build: param.year_build,
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
          dispatch(success(user.data));
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

export function post_booking(formBody) {
  formBody.date = moment(formBody.date).format('YYYY-MM-DD') + ' 00:00:00';
  const request = axios.post(`${PROD_API}/booking/process`, formBody, {
    headers: authHeader()
  })
  return {
    type: POST_BOOKING,
    payload: request
  }

}