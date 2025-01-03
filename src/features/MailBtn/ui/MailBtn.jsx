import MailIcon from 'shared/assets/icons/Mail';
import { Button } from 'shared/ui/Button';

const MailBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<MailIcon />
		</Button>
	);
};

export default MailBtn;
