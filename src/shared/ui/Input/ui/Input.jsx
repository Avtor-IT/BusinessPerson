import { Box } from '@mui/system';
import { cloneElement } from 'react';
import cls from './Input.module.scss';

/**
 * @typedef {"outline" | "card-styled"} Variant
 */

/**
 * @typedef {Object} InputProps
 * @property {string} [className]
 * @property {object} [style]
 * @property {React.ReactNode} [beforePlaceholder] - React node before placeholder
 * @property {React.ReactNode} [afterPlaceholder] - React node after placeholder
 * @property {object} [inputProps]
 * @property {Variant} [variant] - Variant of the input
 * @property {function} [onChange]
 * @property {function} [onInput]
 */

/**
 * @param {InputProps} props
 * @returns {JSX.Element}
 */
const Input = ({
	className = '',
	style,
	beforePlaceholder,
	afterPlaceholder,
	inputProps,
	variant = 'outline',
	onChange,
	onInput,
	value,
	disabled,
	...props
}) => {
	const BeforeWithProps =
		beforePlaceholder &&
		cloneElement(beforePlaceholder, {
			className: cls.IconBefore,
		});
	const AfterWithProps =
		afterPlaceholder &&
		cloneElement(afterPlaceholder, {
			className: cls.IconAfter,
		});

	return (
		<Box
			className={`${cls.Input} ${cls[variant]} ${className}`}
			style={style}
			{...props}
		>
			{BeforeWithProps}
			<input
				disabled={disabled}
				onChange={onChange}
				onInput={onInput}
				value={value}
				{...inputProps}
			/>
			{AfterWithProps}
		</Box>
	);
};

export default Input;
