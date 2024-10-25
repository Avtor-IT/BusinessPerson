import { Card } from 'shared/ui/Card';
import cls from './MyCompanyAccounts.module.scss';

// Компонент является высокой абстракцией, он не зависит на реализацию left и right,
// он не знает, что в них лежит. А его название имеет значение места и функциональности его использования.
// Я думаю, лучше изменить название на более абстрактное, его назначение никак не связано с компанией, это просто
// компоновщик двух других компонентов.

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
