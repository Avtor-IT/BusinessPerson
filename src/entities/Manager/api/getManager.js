import { apiCaller } from 'shared/api';

const getManager = async () => {
	try {
		return await apiCaller('MANAGER');
	} catch (e) {
		throw Error(e);
	}
};

export default getManager;
