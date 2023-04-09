import PropTypes from 'prop-types';

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

Button.propTypes = {
	buttonText: PropTypes.string,
	buttonType: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
