import UsersIcon from 'shared/icons/Users';
import { Accounting, HumanResources, LegalSupport } from '../serviceList';
import CoinsIcon from 'shared/icons/Coins';

const servicesDictionary = (id) => {
	switch (id) {
		case 1:
			return {
				Component: Accounting,
				title: 'Бухгалтерское обслуживание',
				icon: CoinsIcon,
			};
		case 2:
			return {
				Component: HumanResources,
				title: 'Кадровое дело',
				icon: UsersIcon,
			};
		case 3:
			return {
				Component: LegalSupport,
				title: 'Юридическая поддержка',
				icon: UsersIcon,
			};
		default:
			console.error(`Service with ID ${id} not found.`);
			return null;
	}
};

export default servicesDictionary;
