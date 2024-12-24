import servicesDictionary from 'entities/Service/model/dictionary.js';

const RenderService = ({ id }) => {
	const Component = servicesDictionary[id];
	if (!Component) {
		console.error(`Service ${id} was not found!`);
	}
	return Component ? <Component /> : null;
};

export default RenderService;
