import React, { useEffect, useState } from 'react';
import BookerService from 'widgets/BookerService';
import ScalesIcon from 'shared/assets/ScalesIcon';
import UsersIcon from 'shared/assets/UsersIcon';
import CoinsIcon from 'shared/assets/CoinsIcon';
import LineChartIcon from 'shared/assets/LineChartIcon';
import { services } from 'shared/json';
import { merge } from 'shared/lib';
import ServiceSection from 'widgets/ServiceBlock';

const ServicesPage = () => {
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

	if (!preparedServices) return null;

	return (
		<>
			<ServiceSection services={preparedServices} />
		</>
	);
};

export default ServicesPage;
