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

export default Input;
