import api from 'shared/api/index.js';
import { apiEndpoints, baseUrl } from 'shared/model';

export const getManager = () => {
	const Api = new api();

	try {
		return Api.Get(`${baseUrl}${apiEndpoints.MANAGER}`);
	} catch (e) {
		throw Error(e);
	}
};
