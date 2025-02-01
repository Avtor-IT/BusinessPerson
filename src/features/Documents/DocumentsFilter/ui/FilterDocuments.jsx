import { Box } from '@mui/system';
import Input from 'shared/ui/Input';
import useDocumentsFilterStore from '../model/documentsFilterStore';

const FilterDocuments = () => {
	const setSearch = useDocumentsFilterStore.use.setSearch();

	return (
		<Box>
			<Input
				inputProps={{ placeholder: 'Поиск' }}
				variant="card-styled"
				mb={4}
				onInput={(e) => setSearch(e.target.value)}
			/>
		</Box>
	);
};

export default FilterDocuments;
