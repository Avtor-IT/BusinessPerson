import { servicesDictionary } from 'entities/Service';

const RenderServiceById = ({ id }) => {
	const Component = servicesDictionary(id);
	if (!Component) {
		console.error(`Service ${id} was not found!`);
	}
	return Component ? <Component /> : null;
};

export default RenderServiceById;
