import { apiEndpoints } from './apiConsts';
import Api from './base';

const resolveEndpoint = (endpoint) => {
	if (!apiEndpoints[endpoint]) {
		throw new Error(`Endpoint "${endpoint}" does not exist.`);
	}

	return apiEndpoints[endpoint];
};

/**
 * @typedef {'STATUS' | 'ME' | 'JWT_CREATE' | 'JWT_VERIFY' | 'JWT_REFRESH' |
 * 'MANAGER' | 'COMPANIES' | 'DOCUMENTS' | 'USER_SERVICES' | 'DOWNLOAD_FILE' | 'UPLOAD_FILE' | 'CHAT_ROOM' | 'CHAT_MESSAGES'} ApiEndpointKey
 * @typedef {'GET' | 'POST'} ApiMethod
 */

/**
 * @param {ApiEndpointKey} endpoint
 * @param {ApiMethod} method
 * @returns {Promise<any>}
 */

const apiCaller = async (endpoint, method = 'GET', body, config) => {
	try {
		const api = new Api();
		if (method === 'GET') {
			if (body) {
				console.error(`Body is ignored for the ${endpoint} method.`);
			}

			return await api.Get(resolveEndpoint(endpoint), config);
		}
		if (method === 'POST') {
			return await api.Post(resolveEndpoint(endpoint), body, config);
		}
	} catch (e) {
		throw new Error(
			e?.response?.data?.error || `apiCaller error: ${e.message}`
		);
	}
};

export default apiCaller;
