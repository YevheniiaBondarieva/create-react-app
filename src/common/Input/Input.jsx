import PropTypes from 'prop-types';

const Input = ({
	id,
	labelText,
	labelClassName,
	placeholdetText,
	onChange,
	type,
	...otherProps
}) => {
	return (
		<>
			<label htmlFor={id} className={labelClassName}>
				{labelText}{' '}
			</label>
			<input
				type={type}
				id={id}
				placeholder={placeholdetText}
				onChange={onChange}
				{...otherProps}
			/>
		</>
	);
};

Input.propTypes = {
	id: PropTypes.string,
	labelText: PropTypes.string,
	placeholdetText: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	labelClassName: PropTypes.string,
};

export default Input;
