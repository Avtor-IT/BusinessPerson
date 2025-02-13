import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import AddSquareIcon from 'shared/icons/AddSquare';
import CopyIcon from 'shared/icons/Copy';
import { AppRoutes, createRoute } from 'shared/router';
import { Button, CopyBtn } from 'shared/ui/Button';
import { Card, TitledCard } from 'shared/ui/Card';

const documents = [
	'Справка о финансовых показателях',
	'Налоговая выписка',
	'Договор на управление персоналом',
	'Справка №1',
];

const WorkingDocumentsCard = ({ companyTitle, ...props }) => {
	return (
		<TitledCard
			circleSx={{
				width: '700px',
				height: '700px',
				top: '-615px',
				left: '-209px',
				background: '#776FB3',
			}}
			title="Рабочие документы"
			color="var(--color-dark)"
			{...props}
		>
			<Stack
				alignItems="stretch"
				gap={3}
				height="100%"
			>
				<Box textAlign="end">
					<Button variant="unStyled">
						<Stack
							direction="row"
							gap={1}
							alignItems="center"
						>
							<Typography variant="M16">Добавить</Typography>
							<AddSquareIcon />
						</Stack>
					</Button>
				</Box>

				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="stretch"
					flexGrow={1}
				>
					<Stack
						marginTop={3}
						flexGrow={1}
						justifyContent="space-between"
					>
						<Card
							width="160px"
							sx={{ padding: '16px' }}
						>
							<Typography
								variant="M16"
								color="var(--tertiary)"
							>
								Ожидают подписания
							</Typography>
						</Card>

						<Link
							to={createRoute(AppRoutes.COMPANY_DOCUMENTS, {
								companyTitle,
							})}
						>
							<Typography
								variant="M16"
								color="var(--tertiary)"
							>
								Смотреть все
							</Typography>
						</Link>
					</Stack>

					<Box position="relative">
						{documents.map((document, index) => (
							<Card
								key={index}
								style={{
									position: 'absolute',
									height: '291px',
									width: '246px',
									right: `${index * 50}px`,
									top: `${index * 56}px`,
									padding: '16px 32px',
								}}
							>
								<CopyBtn
									style={{ width: '100%' }}
									textToCopy={document}
								>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="start"
										gap={1}
									>
										<Typography
											variant="R16"
											color="var(--tertiary)"
											textAlign="start"
											maxWidth="150px"
										>
											{document}
										</Typography>
										<CopyIcon />
									</Stack>
								</CopyBtn>
							</Card>
						))}
					</Box>
				</Stack>
			</Stack>
		</TitledCard>
	);
};

export default WorkingDocumentsCard;
