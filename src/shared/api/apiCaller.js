import { apiEndpoints, baseUrl } from './apiConsts';
import Api from './base';

const resolveEndpoint = (endpoint) => {
	if (!apiEndpoints[endpoint]) {
		throw new Error(`Endpoint "${endpoint}" does not exist.`);
	}

	return `${baseUrl}${apiEndpoints[endpoint]}`;
};

/**
 * @typedef {'STATUS' | 'ME' | 'JWT_CREATE' | 'JWT_VERIFY' | 'JWT_REFRESH' |
 * 'MANAGER' | 'COMPANIES' | 'DOCUMENTS' | 'USER_SERVICES' | 'DOWNLOAD_FILE' | 'UPLOAD_FILE'} ApiEndpointKey
 * @typedef {'GET' | 'POST'} ApiMethod
 */

/**
 * @param {ApiEndpointKey} endpoint - Название эндпоинта
 * @param {ApiMethod} method - Метод запроса
 * @returns {Promise<any>} Полный URL для API
 */

const apiCaller = async (endpoint, method = 'GET', options = {}, headers) => {
	try {
		const api = new Api();
		if (method === 'GET') {
			return await api.Get(resolveEndpoint(endpoint), options, headers);
		}
		if (method === 'POST') {
			return await api.Post(resolveEndpoint(endpoint), options, headers);
		}
	} catch (e) {
		throw new Error(
			e?.response?.data?.error || `apiCaller error: ${e.message}`
		);
	}
};

export default apiCaller;
