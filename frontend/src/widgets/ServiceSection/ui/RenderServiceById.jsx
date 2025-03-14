import { servicesDictionary, ServiceWithIcon } from 'entities/Service';
import ServiceBlock from './ServiceBlock';

const RenderServiceById = ({ id }) => {
	const service = servicesDictionary(id);
	if (!service) {
		console.error(`Service ${id} was not found!`);
	}
	return service.Component ? (
		<ServiceWithIcon
			icon={
				<service.icon
					width={247}
					height={247}
					stroke="var(--tertiary)"
					strokeWidth={20}
				/>
			}
		>
			<ServiceBlock serviceTitle={service.title}>
				<service.Component />
			</ServiceBlock>
		</ServiceWithIcon>
	) : null;
};

export default RenderServiceById;
