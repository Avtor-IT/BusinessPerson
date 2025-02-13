import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { CopyBtn } from 'shared/ui/Button';

const INN = ({ ...props }) => {
	return (
		<CopyBtn textToCopy="0276142588">
			<Stack
				direction="row"
				gap={1}
				alignItems="center"
				color="var(--tertiary)"
				{...props}
			>
				<Typography variant="R20">ИНН:</Typography>
				<Typography variant="R16">0276142588</Typography>
			</Stack>
		</CopyBtn>
	);
};

export default INN;
