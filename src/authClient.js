import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, fetchUtils } from 'react-admin';

export async function authProvider(type, params) {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const response = await fetchUtils.fetchJson('http://localhost:3001/auth', {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            body: JSON.stringify({
                username: params.username,
                password: params.password,
            }),
        });
        console.log(JSON.parse(response.body).AccessToken);
        localStorage.setItem('AccessToken', JSON.parse(response.body).AccessToken);
        return;
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('AccessToken');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('AccessToken');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('AccessToken') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');
}

export function authorizedHttpClient(url, options = {}) {
    options.user = {
        authenticated: true,
        token: localStorage.getItem('AccessToken'),
    }
    return fetchUtils.fetchJson(url, options);
}