import React from 'react';
import { Card } from 'shared/ui/Card';

const RecommendsCard = ({ children }) => {
	return (
		<Card
			serviceTitle="Рекомендации"
			border={'2px solid var(--secondary)'}
		>
			{children}
		</Card>
	);
};

export default RecommendsCard;
