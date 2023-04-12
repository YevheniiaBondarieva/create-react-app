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

import { Form } from './../../common';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			name,
			password,
			email,
		};
		try {
			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Unable to register.');
			}
			const result = await response.json();
			if (result.successful) {
				navigate('/login');
			} else {
				throw new Error('Unable to register.');
			}
		} catch (error) {
			console.error(error);
			setError('Unable to register. Please try again later.');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h2 className='auth'>Registration</h2>
			<Input
				id='registrationName'
				labelText={registrationNameLabelText}
				className='inputAuth'
				labelClassName='labelAuth'
				placeholdetText={registrationNamePlaceholdetText}
				type='text'
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<Input
				id='registrationEmail'
				labelText={registrationEmailLabelText}
				placeholdetText={registrationEmailPlaceholdetText}
				type='email'
				className='inputAuth'
				labelClassName='labelAuth'
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				id='registrationPassword'
				labelText={registrationPasswordLabelText}
				placeholdetText={registrationPasswordPlaceholdetText}
				type='password'
				className='inputAuth'
				labelClassName='labelAuth'
				minLength='6'
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Button
				className='button'
				buttonText={registrationButtonText}
				buttonType='submit'
			/>
			{error && <p className='auth'>{error}</p>}
			<p className='auth'>
				If you have an account you can &nbsp;
				<Link to='/login' className='auth'>
					Login
				</Link>
			</p>
		</Form>
	);
};

export default Registration;
