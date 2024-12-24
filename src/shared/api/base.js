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
				// if (!response.status === 403) {
				return Promise.resolve(response.data);
				// }

				// При ошибке запроса выкидывать из акка
				// Убрал так как при ошибке со стороны битрикса нелогично
				// 	sessionStorage.removeItem('access');
				// 	sessionStorage.removeItem('refresh');
			})
			.catch((error) => {
				// sessionStorage.removeItem('access');
				// sessionStorage.removeItem('refresh');
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
				// if (!response.status === 403) {
				return Promise.resolve(response.data);
				// }

				// При ошибке запроса выкидывать из акка
				// Убрал так как при ошибке со стороны битрикса нелогично
				// 	sessionStorage.removeItem('access');
				// 	sessionStorage.removeItem('refresh');
			})
			.catch((error) => {
				// sessionStorage.removeItem('access');
				// sessionStorage.removeItem('refresh');
				return Promise.reject(error);
			});
	};

	DownloadFile = async (url, params) => {
		try {
			const { filename, ...restParams } = params;

			const response = await axios.get(url, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
				responseType: 'arraybuffer',
				...restParams,
			});

			const blob = new Blob([response.data], {
				type:
					response.headers['content-type'] ||
					'application/octet-stream',
			});

			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = `${filename || 'file'}`; // Имя файла
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (e) {
			throw Error(e?.response?.data?.error || e);
		}
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
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			return Promise.reject(e);
		}
	};
}

export default Api;
