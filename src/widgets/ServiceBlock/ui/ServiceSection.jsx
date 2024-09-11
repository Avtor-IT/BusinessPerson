import { useEffect, useState } from 'react';
import ServiceBlock from './ServiceBlock';
import PromoServiceBlock from './PromoServiceBlock';
import SectionTitle from 'shared/ui/SectionTitle';
import { merge } from 'shared/lib';
import BookerService from 'widgets/BookerService';
import CoinsIcon from 'shared/assets/CoinsIcon';
import ScalesIcon from 'shared/assets/ScalesIcon';
import UsersIcon from 'shared/assets/UsersIcon';
import LineChartIcon from 'shared/assets/LineChartIcon';
import { services } from 'shared/json';
import { Box } from '@mui/system';

const ServiceSection = ({ ...props }) => {
	const [preparedServices, setPreparedServices] = useState();

	useEffect(() => {
		setPreparedServices(
			merge(
				{
					booker: {
						component: <BookerService />,
						promoContent: { icon: <CoinsIcon /> },
					},
					legal: {
						component: null,
						promoContent: {
							icon: <ScalesIcon />,
						},
					},
					personnel: {
						component: null,
						promoContent: {
							icon: <UsersIcon />,
						},
					},
					marketing: {
						component: null,
						promoContent: {
							icon: <LineChartIcon />,
						},
					},
				},
				services
			)
		);
	}, []);

	const renderServices = (services) => {
		const result = [];

		for (let [name, options] of Object.entries(services)) {
			result.push(
				<ServiceBlock
					serviceTitle={options.title}
					key={name}
				>
					{options.isAvailable ? (
						options.component
					) : (
						<PromoServiceBlock
							title={options.title}
							tagList={options.promoContent.tagList}
							icon={options.promoContent.icon}
						/>
					)}
				</ServiceBlock>
			);
		}

		return result;
	};

	const renderSkeleton = () => {
		return Array.from({ length: 4 }).map((_, i) => (
			<ServiceBlock key={i} />
		));
	};

	return (
		<Box
			component="section"
			{...props}
		>
			<SectionTitle>Мои услуги</SectionTitle>
			{preparedServices
				? renderServices(preparedServices)
				: renderSkeleton()}
		</Box>
	);
};

export default ServiceSection;
