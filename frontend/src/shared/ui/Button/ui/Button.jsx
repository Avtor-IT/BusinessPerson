import cls from './Button.module.scss';

export const Button = ({ children, className, variant, ...otherProps }) => {
	return (
		<button
			className={`${cls.Button} ${variant ? cls[variant] : cls.contained} 
            ${className || ''}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
