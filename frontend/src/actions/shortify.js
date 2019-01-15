import constants from '../constants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function shortifyURL(path) {
    const URL = constants.API_URL;
    
    return fetch(URL, {
        method: 'POST',
        headers: [
            ["Content-Type", "application/json"]
        ],
        body: JSON.stringify({ originalUrl: path })
    })
        .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
                return res.json();
            }

            return res.json().then(Promise.reject.bind(Promise));
        });
}