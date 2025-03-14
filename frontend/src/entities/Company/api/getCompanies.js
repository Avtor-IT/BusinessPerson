import { apiCaller } from 'shared/api';

const getCompanies = () => {
	try {
		return apiCaller('COMPANIES');
	} catch (e) {
		throw Error(e);
	}
};

export default getCompanies;
