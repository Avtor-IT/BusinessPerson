import React, { useState } from 'react';
import { Card } from 'shared/ui/Card';
import MultipleGauge from 'shared/ui/MultipleGauge';

import { taxes } from 'shared/model';
import { Box, Stack } from '@mui/system';

import cls from './TaxesInfographics.module.scss';
import { Typography } from '@mui/material';
import IconButton from 'shared/ui/Button';

const TaxesInfographics = () => {
	const sum = taxes.reduce((acc, tax) => acc + tax.total, 0);

	const maxTotal = Math.max(...taxes.map((t) => t.total));
	const values = taxes
		.map((tax) => (tax.total * 100) / maxTotal)
		.sort((a, b) => b - a);

	const colors = ['#F25B10', '#2E2C83', '#D58528', '#34996D'];

	const [isHovered, setHovered] = useState(false);

	return (
		<Card
			variant="ServiceCard"
			serviceTitle="Налоги инфографика"
		>
			<Stack
				justifyContent="space-between"
				gap={'16px'}
				flexGrow={1}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					spacing="16px"
				>
					<Stack
						className="scrollable"
						spacing="16px"
						maxHeight="160px"
						overflow="auto"
						flexGrow={1}
						pr="8px"
					>
						{taxes
							.sort((a, b) => b.total - a.total)
							.map((tax, i) => (
								<Stack
									direction="row"
									style={{
										'--tax-color': colors[i] || 'red',
									}}
									className={cls.TaxNameItem}
									key={tax.name}
								>
									<Typography variant="L20">
										{tax.name}
									</Typography>
								</Stack>
							))}
					</Stack>
					<Box>
						<MultipleGauge
							width={327}
							height={327 / 2}
							values={values}
							valueText={sum.toString()}
							colors={colors}
						/>
					</Box>
				</Stack>
				<Box
					border="1px solid var(--tertiary)"
					borderRadius="16px"
					backgroundColor="var(--tertiary)"
					p="16px 24px"
					mt="auto"
					overflow="hidden"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<Stack
						direction="row"
						alignItems="center"
						spacing="34px"
						color="var(--color-light-secondary)"
						className={cls.payment}
						style={{
							'--circle-size': isHovered ? '200px' : '192px',
						}}
						justifyContent="space-between"
					>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							spacing="8px"
							flexGrow={1}
						>
							<Typography variant="L16">
								Необходимо выплатить
							</Typography>
							<Typography
								variant="M20"
								flexGrow={1}
								textAlign="center"
							>
								{new Intl.NumberFormat('ru-RU').format(
									maxTotal
								)}
							</Typography>
						</Stack>
						<IconButton
							color="var(--tertiary)"
							style={{ zIndex: 1 }}
						>
							<Typography variant="L16">Оплатить</Typography>
						</IconButton>
					</Stack>
				</Box>
			</Stack>
		</Card>
	);
};

export default TaxesInfographics;
