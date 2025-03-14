import { apiCaller } from 'shared/api';

export const getCurrentUser = async () => {
	try {
		return apiCaller('ME');
	} catch (_e) {
		throw Error('Не удалось получить информацию о пользователе');
	}
};
