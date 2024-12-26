import { apiCaller } from 'shared/api';

export const login = async (params) => {
	try {
		const response = await apiCaller('JWT_CREATE', 'POST', params);
		if (response?.access) {
			sessionStorage.setItem('access', response.access);
			sessionStorage.setItem('refresh', response.refresh);
			return response.access;
		}
		return response;
	} catch (e) {
		console.error('Login failed:', e);
		if (e.response.status === 401) {
			throw Error('Unauthorized');
		}
		throw Error(e.response.status);
	}
};
