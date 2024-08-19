import axios from 'axios';
import { apiEndpoints, baseUrl } from 'shared/model';

class Api {
	Get = async (url, params) => {
		await this.GetAccessToken();
		return axios
			.get(url, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
				params,
			})
			.then((response) => {
				if (response.status === 403) {
					sessionStorage.removeItem('access');
					sessionStorage.removeItem('refresh');
				} else {
					return Promise.resolve(response.data);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				sessionStorage.removeItem('access');
				sessionStorage.removeItem('refresh');
				return Promise.reject(error);
			});
	};

	Post = async (url, params) => {
		await this.GetAccessToken();
		return axios
			.post(url, params, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
			})
			.then((response) => {
				if (response.status === 403) {
					sessionStorage.removeItem('access');
					sessionStorage.removeItem('refresh');
				} else {
					return Promise.resolve(response.data);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				sessionStorage.removeItem('access');
				sessionStorage.removeItem('refresh');
				return Promise.reject(error);
			});
	};

	GetAccessToken = async () => {
		try {
			const access = sessionStorage.getItem('access');
			return (
				access &&
				(await axios.post(`${baseUrl}${apiEndpoints.JWT_VERIFY}`, {
					token: access,
				}))
			);
		} catch (e) {
			if (
				e.response.status === 401 &&
				sessionStorage.getItem('refresh')
			) {
				return await this.RefreshToken();
			}
			console.error('Error: ', e);
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			return Promise.reject(e);
		}
	};

	RefreshToken = async () => {
		try {
			const response = await axios.post(
				`${baseUrl}${apiEndpoints.JWT_REFRESH}`,
				{ refresh: sessionStorage.getItem('refresh') }
			);
			sessionStorage.setItem('access', response.data.access);
			return response.data;
		} catch (e) {
			console.error('Error', e);
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			return Promise.reject(e);
		}
	};
}

export default Api;
