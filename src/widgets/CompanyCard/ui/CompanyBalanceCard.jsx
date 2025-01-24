import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import AddSquareIcon from 'shared/icons/AddSquare';
import { HistoryIcon } from 'shared/icons/History';
import { IconButton } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';

const CompanyBalanceCard = () => {
	return (
		<Card sx={{ padding: '16px !important', minWidth: '244px' }}>
			<Stack
				justifyContent="space-between"
				alignItems="stretch"
				height="100%"
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="M20">Баланс</Typography>
					<IconButton icon={<AddSquareIcon />} />
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<IconButton
						icon={<HistoryIcon stroke="var(--secondary)" />}
					/>
					<Typography variant="R20">7 112 002 ₽</Typography>
				</Stack>
			</Stack>
		</Card>
	);
};

export default CompanyBalanceCard;
