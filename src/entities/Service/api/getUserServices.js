import { apiCaller } from 'shared/api';

const getUserServices = async () => {
	try {
		return await apiCaller('USER_SERVICES');
	} catch (e) {
		throw Error('Ошибка загрузки услуг: ' + e.message);
	}
};

export default getUserServices;
