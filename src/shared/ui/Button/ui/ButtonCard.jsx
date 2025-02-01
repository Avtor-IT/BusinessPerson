import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';

const ButtonCard = ({ children, active = false, ...props }) => {
	if (active) {
		return (
			<Button
				variant="unStyled"
				{...props}
			>
				<Card
					sx={{
						padding: '15px 16px',
						borderRadius: '8px',
						border: '1.5px solid var(--secondary)',
					}}
					variant="no-shadow"
					color="var(--secondary)"
				>
					{children}
				</Card>
			</Button>
		);
	}

	return (
		<Button
			variant="unStyled"
			{...props}
		>
			<Card
				color="var(--tertiary)"
				sx={{
					padding: '15px 15px',
					borderRadius: '8px',
					border: '1.5px solid transparent',
				}}
			>
				{children}
			</Card>
		</Button>
	);
};

export default ButtonCard;
