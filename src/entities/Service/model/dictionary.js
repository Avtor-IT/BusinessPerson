import { Accounting, HumanResources, LegalSupport } from 'widgets/ServiceBlock';

const servicesDictionary = (id) => {
	switch (id) {
		case 1:
			return Accounting;
		case 2:
			return HumanResources;
		case 3:
			return LegalSupport;
	}
};

export default servicesDictionary;
