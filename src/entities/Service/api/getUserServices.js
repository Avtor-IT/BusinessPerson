import api from 'shared/api/index.js';
import { apiEndpoints, baseUrl } from 'shared/model/index.js';

const getUserServices = async () => {
	try {
		const Api = new api();
		return Api.Get(`${baseUrl}${apiEndpoints.USER_SERVICES}`);
	} catch (e) {
		throw Error('Ошибка загрузки услуг: ' + e.message);
	}
};

export default getUserServices;
