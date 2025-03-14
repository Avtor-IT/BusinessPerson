import { Stack } from '@mui/system';
import ExportIcon from 'shared/icons/Export';
import { Button } from 'shared/ui/Button';

const ExportDocumentButton = ({ style, icon }) => {
	return (
		<Button
			variant="unStyled"
			style={style}
		>
			<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				height="1rem"
				minWidth="24px"
			>
				{icon || <ExportIcon strokeWidth="1.5" />}
			</Stack>
		</Button>
	);
};

export default ExportDocumentButton;
