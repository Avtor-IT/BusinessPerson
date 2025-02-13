import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ExportIcon from 'shared/icons/Export';
import ImportIcon from 'shared/icons/Import';
import { RefreshIcon } from 'shared/icons/Refresh';
import { TitledCard } from 'shared/ui/Card';
import { Button } from './../../../shared/ui/Button/ui/Button';

const TaxExtractCard = ({ ...props }) => {
	return (
		<TitledCard
			{...props}
			title="Выписка с налоговой"
			circleSx={{ left: '-224px', top: '-571px', background: '#C16496' }}
		>
			<Stack
				height="100%"
				direction="row"
				alignItems="end"
				justifyContent="space-between"
			>
				<Stack color="var(--tertiary)">
					<Typography variant="R20">Последнее обновление</Typography>
					<Typography variant="M16">29.08.2024 в 10:00</Typography>
				</Stack>

				<Stack
					height="100%"
					justifyContent="space-between"
				>
					<Button variant="unStyled">
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="end"
							gap={1}
						>
							<Typography
								variant="M16"
								color="var(--tertiary)"
								textAlign="end"
							>
								Запрос на обновление
							</Typography>
							<RefreshIcon />
						</Stack>
					</Button>
					<Stack
						direction="row"
						alignItems="center"
						gap={2}
					>
						<Typography
							variant="M16"
							color="var(--secondary)"
						>
							Выписка за 29.08.2024
						</Typography>
						<Stack
							direction="row"
							gap={1}
						>
							<ExportIcon />
							<ImportIcon />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</TitledCard>
	);
};

export default TaxExtractCard;
