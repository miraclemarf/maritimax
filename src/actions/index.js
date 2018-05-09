import axios from 'axios';
export const FETCH_NEWS = 'fetch_news';
export const FETCH_MORENEWS = 'fetch_morenews';
export const FETCH_PRODUCTS = 'fetch_products';
export const SEARCH_PRODUCTS = 'search_products';
const BASE_API = 'http://127.0.0.1:3001';
const PROD_API = 'http://siapayangnanya.com/api'

export function fetch_news() {
  const request = axios.get(`${BASE_API}/articles`);
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

export function search_products() {
  const request = axios.get(`${BASE_API}/productOnSearch`);
  return {
    type: SEARCH_PRODUCTS,
    payload: request
  };
}