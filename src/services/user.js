export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const client_secret = 'YYDxVPL3Rl4wxZQsXYCm65ysxzkpgDYLqTDeQPba',
        client_id = '2',
        scope = '*';

    const DO = 'http://128.199.233.95';
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
    return fetch(DO + '/oauth/token', requestOptions)
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
function getAll() {
    return null;
}
