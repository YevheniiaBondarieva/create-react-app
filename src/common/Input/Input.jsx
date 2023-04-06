const Input = ({
	id,
	labelText,
	placeholdetText,
	onChange,
	type,
	...otherProps
}) => {
	return (
		<>
			<label htmlFor={id}>{labelText} </label>
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
