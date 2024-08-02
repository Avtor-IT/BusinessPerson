import React from 'react';
import ServiceBlock from 'widgets/ServiceBlock';
import { SectionTitle } from 'shared/ui/SectionTitle';
import BookerService from 'widgets/BookerService';

const services = [
	{
		title: 'Бухгалтерское обслуживание',
		isAvailable: true,
		component: <BookerService />,
		promoComponent: null,
	},
	{
		title: 'Юридическое обслуживание',
		isAvailable: false,
		component: null,
		promoComponent: null,
	},
	{
		title: 'Кадровое обслуживание',
		isAvailable: false,
		component: null,
		promoComponent: null,
	},
	{
		title: 'Услуги маркетинга',
		isAvailable: false,
		component: null,
		promoComponent: null,
	},
	{
		title: 'Бухгалтерское обслуживание2',
		isAvailable: false,
		component: null,
		promoComponent: null,
	},
];
const ServicesPage = () => {
	return (
		<>
			<SectionTitle>Мои услуги</SectionTitle>
			{services.map((service) => (
				<ServiceBlock
					key={service.title}
					serviceTitle={service.title}
				>
					{service.isAvailable
						? service.component
						: service.promoComponent}
				</ServiceBlock>
			))}
		</>
	);
};

export default ServicesPage;
