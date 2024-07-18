import { Api } from 'shared/api';

export const login = async (params) => {
    const api = new Api();

    api.Post('https://server/login', params)
        .then((data) => {
            sessionStorage.setItem('token', data.token);
            window.location.href = '/';
        })
        .catch((error) => {
            console.error('Login failed:', error);
        });
};
