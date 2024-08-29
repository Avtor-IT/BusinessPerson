import React from 'react';

const ScalesIcon = ({ width, height, fill, stroke, ...otherProps }) => {
	return (
		<svg
			width={width || '428'}
			height={height || '328'}
			viewBox="0 0 428 328"
			fill={fill || 'none'}
			{...otherProps}
		>
			<path
				d="M5.66663 239.167V236.038C5.66663 229.444 5.66663 226.147 6.17094 222.935C6.61872 220.084 7.36165 217.286 8.38776 214.588C9.54342 211.549 11.1791 208.686 14.4504 202.962L88.9999 72.5M5.66663 239.167C5.66663 285.19 42.9762 322.5 88.9999 322.5C135.024 322.5 172.333 285.19 172.333 239.167M5.66663 239.167V235C5.66663 229.166 5.66663 226.249 6.80197 224.021C7.80066 222.061 9.3942 220.467 11.3542 219.469C13.5825 218.333 16.4994 218.333 22.3333 218.333H155.667C161.5 218.333 164.417 218.333 166.646 219.469C168.606 220.467 170.199 222.061 171.198 224.021C172.333 226.249 172.333 229.166 172.333 235V239.167M88.9999 72.5L163.549 202.962C166.821 208.686 168.456 211.549 169.612 214.588C170.638 217.286 171.381 220.084 171.829 222.935C172.333 226.147 172.333 229.444 172.333 236.038V239.167M88.9999 72.5L339 30.8333M255.667 197.5V194.371C255.667 187.777 255.667 184.481 256.171 181.269C256.619 178.417 257.362 175.619 258.388 172.921C259.543 169.882 261.179 167.02 264.45 161.295L339 30.8333M255.667 197.5C255.667 243.524 292.976 280.833 339 280.833C385.024 280.833 422.333 243.524 422.333 197.5M255.667 197.5V193.333C255.667 187.499 255.667 184.583 256.802 182.354C257.801 180.394 259.394 178.801 261.354 177.802C263.582 176.667 266.499 176.667 272.333 176.667H405.667C411.5 176.667 414.417 176.667 416.646 177.802C418.606 178.801 420.199 180.394 421.198 182.354C422.333 184.583 422.333 187.499 422.333 193.333V197.5M339 30.8333L413.549 161.295C416.821 167.02 418.456 169.882 419.612 172.921C420.638 175.619 421.381 178.417 421.829 181.269C422.333 184.481 422.333 187.777 422.333 194.371V197.5M214 -52.5V51.6667"
				stroke={stroke || 'white'}
				strokeWidth="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ScalesIcon;