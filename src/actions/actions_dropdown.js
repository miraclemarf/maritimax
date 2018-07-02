import axios from 'axios';
export const GET_MODELVESSEL = 'get_modelvessel';
export const GET_CHARTERTYPE = 'get_chartertype';

const PROD_API = 'http://siapayangnanya.com/api';
const LOCAL_API = 'http://localhost:8000/api';

export function get_modelvessel() {
    const request = axios.get(`${PROD_API}/model-cargo`);
    return {
        type: GET_MODELVESSEL,
        payload: request
    };
}

export function get_chartertype() {
    const request = axios.get(`${PROD_API}/category-cargo`);
    return {
        type: GET_CHARTERTYPE,
        payload: request
    };
}