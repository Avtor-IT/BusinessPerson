import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import AddSquareIcon from 'shared/icons/AddSquare';
import CopyIcon from 'shared/icons/Copy';
import { AppRoutes, createRoute } from 'shared/router';
import { Button, CopyBtn } from 'shared/ui/Button';
import { Card, TitledCard } from 'shared/ui/Card';

const documents = ['СНИЛС', 'Устав', 'ОРГН', 'Пасорт'];

const MyDocumentsCard = ({ companyTitle, ...props }) => {
	return (
		<TitledCard
			circleSx={{
				width: '678px',
				height: '678px',
				bottom: '-197px',
				right: '293px',
				background: 'var(--secondary)',
			}}
			title="Мои документы"
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
						<Typography variant="R20">
							Все необходимые документы
							<br />
							всегда под рукой
						</Typography>

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
									>
										<Typography
											variant="R20"
											color="var(--tertiary)"
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

export default MyDocumentsCard;
