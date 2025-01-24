import ExportIcon from 'shared/icons/Export';
import { Button } from 'shared/ui/Button';

const ExportBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<ExportIcon />
		</Button>
	);
};

export default ExportBtn;
