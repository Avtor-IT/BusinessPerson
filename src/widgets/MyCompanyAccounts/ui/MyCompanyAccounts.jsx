import React from 'react';
import { Card } from 'shared/ui/Card';
import cls from './myCompanyAccounts.module.scss';

export const MyCompanyAccounts = ({ LeftComponent, RightComponent }) => {
	return (
		<Card className={`${cls.myCompanyAccounts}`}>
			<Card className={`${cls.myCompany}`}>
				<LeftComponent />
			</Card>
			<Card className={`${cls.myAccounts}`}>
				<RightComponent />
			</Card>
		</Card>
	);
};
