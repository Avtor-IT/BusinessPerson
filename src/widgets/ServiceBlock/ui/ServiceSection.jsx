import SectionTitle from 'shared/ui/SectionTitle';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useGetUserServices } from 'entities/Service';
import ServiceBlock from './ServiceBlock';
import RenderServiceById from './RenderServiceById';

const renderServices = (services) =>
	services.map(({ service }) => (
		<RenderServiceById
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
