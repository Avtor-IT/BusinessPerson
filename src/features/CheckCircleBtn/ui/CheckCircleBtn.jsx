import { Button } from 'shared/ui/Button';
import CheckCircle from 'shared/assets/icons/CheckCircle';

const CheckCircleBtn = ({ className, stroke = '#7B7F9F', ...otherProps }) => {
	return (
		<>
			<Button
				className={className}
				variant="unStyled"
				{...otherProps}
			>
				<CheckCircle stroke={stroke} />
			</Button>
			{/* <Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={handleClose}
				message="Текст скопирован"
			/> */}
		</>
	);
};

export default CheckCircleBtn;
