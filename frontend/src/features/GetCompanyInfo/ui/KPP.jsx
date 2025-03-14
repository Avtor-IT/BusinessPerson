import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { CopyBtn } from 'shared/ui/Button';

const KPP = ({ ...props }) => {
	return (
		<CopyBtn textToCopy="12345678">
			<Stack
				direction="row"
				gap={1}
				alignItems="center"
				color="var(--tertiary)"
				{...props}
			>
				<Typography variant="R20">КПП:</Typography>
				<Typography variant="R16">12345678</Typography>
			</Stack>
		</CopyBtn>
	);
};

export default KPP;
