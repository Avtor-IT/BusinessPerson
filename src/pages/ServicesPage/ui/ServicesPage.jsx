import React from 'react';
import { PromoServiceBlock, ServiceBlock } from 'widgets/ServiceBlock';
import BookerService from 'widgets/BookerService';
import { SectionTitle } from 'shared/ui/SectionTitle';

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
		promoComponent: (
			<PromoServiceBlock
				title={'Подключить юридическое обслуживание'}
				tagList={[
					{
						name: 'Управление персоналом',
						description:
							'Консультации, подготовка документов, представительство в судах.',
					},
					{
						name: 'Эффективный персонал',
						description: 'Описание тега эффективный персонал',
					},
					{
						name: 'Законодательная поддержка',
						description: 'Описание тега Законодательная поддержка',
					},
					{
						name: 'Гибкие решения',
						description: 'Описание тега Гибкие решения',
					},
				]}
			/>
		),
	},
	{
		title: 'Кадровое обслуживание',
		isAvailable: false,
		component: null,
		promoComponent: (
			<PromoServiceBlock
				title={'Подключить кадровое обслуживание'}
				tagList={[
					{
						name: 'Управление персоналом',
						description:
							'Консультации, подготовка документов, представительство в судах.',
					},
					{
						name: 'Эффективный персонал',
						description: 'Описание тега эффективный персонал',
					},
					{
						name: 'Законодательная поддержка',
						description: 'Описание тега Законодательная поддержка',
					},
					{
						name: 'Гибкие решения',
						description: 'Описание тега Гибкие решения',
					},
				]}
			/>
		),
	},
	{
		title: 'Услуги маркетинга',
		isAvailable: false,
		component: null,
		promoComponent: (
			<PromoServiceBlock
				title={'Подключить услуги маркетинга'}
				tagList={[
					{
						name: 'Управление персоналом',
						description:
							'Консультации, подготовка документов, представительство в судах.',
					},
					{
						name: 'Эффективный персонал',
						description: 'Описание тега эффективный персонал',
					},
					{
						name: 'Законодательная поддержка',
						description: 'Описание тега Законодательная поддержка',
					},
					{
						name: 'Гибкие решения',
						description: 'Описание тега Гибкие решения',
					},
				]}
			/>
		),
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
