import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';

const ButtonCard = ({ children, active = false, ...props }) => {
	return (
		<Button
			variant="unStyled"
			{...props}
		>
			<Card
				variant={active && 'no-shadow'}
				color="var(--tertiary)"
				sx={{
					padding: '15px 15px',
					borderRadius: '8px',
					border: active
						? '1.5px solid var(--secondary)'
						: '1.5px solid transparent',
				}}
			>
				{children}
			</Card>
		</Button>
	);
};

export default ButtonCard;
