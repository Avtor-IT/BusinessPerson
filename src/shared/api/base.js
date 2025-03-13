import axios from 'axios';
import { apiEndpoints } from 'shared/model';

const instance = axios.create({
	baseURL: 'https://intizar.pythonanywhere.com',
});

// Add urlParams config property
instance.interceptors.request.use((config) => {
	if (!config.url) {
		return config;
	}

	const currentUrl = new URL(config.url, config.baseURL);

	Object.entries(config.urlParams || {}).forEach(([k, v]) => {
		currentUrl.pathname = currentUrl.pathname.replace(
			`:${k}`,
			encodeURIComponent(v)
		);
	});

	const authPart =
		currentUrl.username && currentUrl.password
			? `${currentUrl.username}:${currentUrl.password}`
			: '';
	return {
		...config,
		baseURL: `${currentUrl.protocol}//${authPart}${currentUrl.host}`,
		url: currentUrl.pathname,
	};
});

class Api {
	Get = async (url, config = {}) => {
		await this._GetAccessToken();

		return instance
			.get(url, {
				...config,
				headers: {
					...config.headers,
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
			})
			.then((response) => {
				return Promise.resolve(response.data);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	Post = async (url, body, config = {}) => {
		await this._GetAccessToken();
		return instance
			.post(url, body, {
				...config,
				headers: {
					...config.headers,
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
			})
			.then((response) => {
				return Promise.resolve(response.data);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	GetBlob = async (url, config = {}) => {
		try {
			const response = await instance.get(url, {
				...config,
				headers: {
					...config.headers,
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
				responseType: 'arraybuffer',
			});

			return new Blob([response.data], {
				type:
					response.headers['content-type'] ||
					'application/octet-stream',
			});
		} catch (e) {
			throw Error(e?.response?.data?.error || e);
		}
	};

	_GetAccessToken = async () => {
		try {
			const access = sessionStorage.getItem('access');
			return (
				access &&
				(await instance.post(`${apiEndpoints.JWT_VERIFY}`, {
					token: access,
				}))
			);
		} catch (e) {
			if (
				e.response.status === 401 &&
				sessionStorage.getItem('refresh')
			) {
				return await this._RefreshToken();
			}
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			return Promise.reject(e);
		}
	};

	_RefreshToken = async () => {
		try {
			const response = await instance.post(
				`${apiEndpoints.JWT_REFRESH}`,
				{ refresh: sessionStorage.getItem('refresh') }
			);
			sessionStorage.setItem('access', response.data.access);
			return response.data;
		} catch (e) {
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			return Promise.reject(e);
		}
	};
}

export default Api;
