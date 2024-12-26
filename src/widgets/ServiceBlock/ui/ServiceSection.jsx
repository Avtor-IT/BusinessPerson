import ServiceBlock from 'widgets/ServiceBlock/ui/ServiceBlock.jsx';
import SectionTitle from 'shared/ui/SectionTitle';
import { Box } from '@mui/system';
import { RenderService, useGetUserServices } from 'entities/Service/index.js';
import { Typography } from '@mui/material';

const renderServices = (services) =>
	services.map(({ service }) => (
		<RenderService
			key={service}
			id={service}
		/>
	));

const renderSkeleton = () =>
	Array.from({ length: 4 }).map((_, i) => <ServiceBlock key={i} />);

const ServiceSection = ({ ...props }) => {
	const {
		data: userServices,
		error: userServicesError,
		isPending: isUserServicesPending,
	} = useGetUserServices();

	if (isUserServicesPending) {
		return (
			<Box
				component="section"
				{...props}
			>
				<SectionTitle>Мои услуги</SectionTitle>
				{renderSkeleton()}
			</Box>
		);
	}

	if (userServicesError) {
		return (
			<Box
				component="section"
				{...props}
			>
				<SectionTitle>Мои услуги</SectionTitle>
				<Typography>Ошибка при загрузке услуг</Typography>
			</Box>
		);
	}

	return (
		<Box
			component="section"
			{...props}
		>
			<SectionTitle>Мои услуги</SectionTitle>
			{renderServices(userServices['active_services'])}
		</Box>
	);
};

export default ServiceSection;
