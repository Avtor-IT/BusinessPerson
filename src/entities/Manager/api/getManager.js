import api from 'shared/api/index.js';
import { apiEndpoints, baseUrl } from 'shared/model';

export const getManager = () => {
	try {
		const Api = new api();
		return Api.Get(`${baseUrl}${apiEndpoints.MANAGER}`);
	} catch (e) {
		throw Error(e);
	}
};
