import PropTypes from 'prop-types';

const Button = ({
	buttonText,
	buttonType,
	onClick,
	className,
	buttonIcon,
	...otherProps
}) => {
	return (
		<button
			type={buttonType}
			className={className}
			onClick={onClick}
			{...otherProps}
		>
			{buttonText} {buttonIcon}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.oneOf(['img', 'svg']),
		PropTypes.object,
	]),
	buttonType: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
