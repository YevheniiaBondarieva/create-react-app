const Button = ({
	buttonText,
	buttonType,
	onClick,
	className,
	...otherProps
}) => {
	return (
		<button
			type={buttonType}
			className={className}
			onClick={onClick}
			{...otherProps}
		>
			{buttonText}
		</button>
	);
};

export default Button;
