import ImportIcon from 'shared/icons/Import';
import { Button } from 'shared/ui/Button';

const ImportBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<ImportIcon />
		</Button>
	);
};

export default ImportBtn;
