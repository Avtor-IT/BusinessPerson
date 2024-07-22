import Api from 'shared/api';
import { apiEndpoints, baseUrl } from 'shared/model';

export const login = async (params) => {
    const api = new Api();

    try {
        const response = await api.Post(
            `${baseUrl}${apiEndpoints.JWT_CREATE}`,
            params
        );
        if (response && response.access) {
            sessionStorage.setItem('access', response.access);
            sessionStorage.setItem('refresh', response.refresh);
            // window.location.href = '/';
            return response.access;
        }
    } catch (e) {
        console.error('Login failed:', e);
        if (e.response.status === 401) {
            throw Error('Unauthorized');
        }
        throw Error(e.response.status);
    }
};
