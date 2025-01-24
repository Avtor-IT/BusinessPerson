import { Box } from '@mui/system';
import Input from 'shared/ui/Input';
import useDocumentsFilterStore, {
	setSearchSelector,
} from '../model/documentsFilterStore';

const FilterDocuments = () => {
	const setSearch = useDocumentsFilterStore(setSearchSelector);

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
