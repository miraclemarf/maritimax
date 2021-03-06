import { authHeader } from '../helpers';
import axios from 'axios';

export const userService = {
    login,
    googleLogin,
    logout,
    register,
    forgotPassword,
    resetPassword,
    changePassword,
    getUser,
    listBooking
};

const BASE_API = app_apiurl;

function login(username, password) {
    const client_secret = app_client_secret,
        client_id = '2',
        scope = '*';

    const DO = 'http://maritimax.com';
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('client_secret', client_secret);
    formData.append('client_id', client_id);
    formData.append('scope', scope);
    formData.append('grant_type', 'password');

    const requestOptions = {
        method: 'POST',
        body: formData
    };
    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,client_id, client_secret, scope })
    };*/

    /*'/users/authenticate'*/
    return fetch(BASE_API + '/oauth/token', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            //console.log(user);
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
function getUser() {
    const DO = 'http://maritimax.com';

    return axios.get(`${BASE_API}/api/user`, {
        headers: authHeader()
    });
}

function register(username, email, password) {

    const DO = 'http://maritimax.com';
    var formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        body: formData
    };

    /*'/users/authenticate'*/
    return fetch(BASE_API + '/api/user/register', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            //console.log(user);
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function forgotPassword(email) {
    var formData = new FormData();
    formData.append('email', email);

    const requestOptions = {
        method: 'POST',
        body: formData
    };

    return fetch(BASE_API + '/api/user/forgot-password', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            return response;
        });
}

function resetPassword(new_password, reset_token) {
    var formData = new FormData();
    formData.append('new_password', new_password);
    formData.append('reset_token', reset_token);

    const requestOptions = {
        method: 'POST',
        body: formData
    };

    return fetch(BASE_API + '/api/user/reset-password', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            return response;
        });
}

function changePassword(old_password, new_password) {
    var formData = new FormData();
    formData.append('old_password', old_password);
    formData.append('new_password', new_password);

    return axios.post(`${BASE_API}/api/user/change-password`, formData, {
        headers: authHeader()
    });
}

function googleLogin(token) {
    const DO = 'http://maritimax.com';
    var formData = new FormData();
    formData.append('google-token', token);

    const requestOptions = {
        method: 'POST',
        body: formData
    };

    /*'/users/authenticate'*/
    return fetch(BASE_API + '/api/user/register/google', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            //console.log(user);
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });

}

function listBooking() {
    return axios.get(`${BASE_API}/api/user/booking`, {
        headers: authHeader()
    });
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}