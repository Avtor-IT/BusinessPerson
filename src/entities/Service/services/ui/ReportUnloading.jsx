import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ExportIcon from 'shared/icons/Export';
import ImportIcon from 'shared/icons/Import';
import { formatDate } from 'shared/lib';
import { Button } from 'shared/ui/Button';

const ReportsUnloading = ({ title, onImport, onExport, ...props }) => {
	const today = new Date();
	return (
		<Stack
			{...props}
			gap={1}
		>
			<Typography
				variant="M16"
				color="var(--secondary)"
			>
				{title}
			</Typography>
			<Stack
				direction="row"
				justifyContent="space-between"
			>
				<Typography variant="M16">
					{formatDate(today.toISOString())}
				</Typography>
				<Stack
					direction="row"
					gap={1}
				>
					<Button
						variant="unStyled"
						onClick={onExport}
					>
						<ExportIcon />
					</Button>
					<Button
						variant="unStyled"
						onClick={onImport}
					>
						<ImportIcon />
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ReportsUnloading;
