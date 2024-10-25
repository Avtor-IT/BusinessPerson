import api from 'shared/api/index.js';
import { apiEndpoints, baseUrl } from 'shared/model';

export const getCompanies = () => {
	const Api = new api();

	try {
		return Api.Get(`${baseUrl}${apiEndpoints.COMPANIES}`);
	} catch (e) {
		throw Error(e);
	}
};
