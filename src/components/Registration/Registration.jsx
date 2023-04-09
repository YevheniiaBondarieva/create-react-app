import { Input, Button } from '../../common';

import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import {
	registrationNameLabelText,
	registrationNamePlaceholdetText,
	registrationEmailLabelText,
	registrationEmailPlaceholdetText,
	registrationPasswordLabelText,
	registrationPasswordPlaceholdetText,
	registrationButtonText,
} from './../../constants';

import { Form } from './Registration.style';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			name,
			password,
			email,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful) {
			navigate('/login');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h2 className='registration'>Registration</h2>
			<Input
				id='registrationName'
				labelText={registrationNameLabelText}
				className='registation'
				labelClassName='registration'
				placeholdetText={registrationNamePlaceholdetText}
				type='text'
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<Input
				id='registrationEmail'
				labelText={registrationEmailLabelText}
				placeholdetText={registrationEmailPlaceholdetText}
				type='text'
				className='registation'
				labelClassName='registration'
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				id='registrationPassword'
				labelText={registrationPasswordLabelText}
				placeholdetText={registrationPasswordPlaceholdetText}
				type='text'
				className='registation'
				labelClassName='registration'
				minLength='6'
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Button
				className='registrationButton'
				buttonText={registrationButtonText}
				buttonType='submit'
			/>
			<p className='registation'>
				If you have an account you can{' '}
				<Link to='/login' className='loginLink'>
					Login
				</Link>
			</p>
		</Form>
	);
};

export default Registration;
