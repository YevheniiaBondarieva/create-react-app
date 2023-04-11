import { Input, Button } from '../../common';

import {
	loginEmailLabelText,
	loginEmailPlaceholdetText,
	loginPasswordLabelText,
	loginPasswordPlaceholdetText,
	loginButtonText,
} from './../../constants';

import { useNavigate, Link } from 'react-router-dom';

import { useState } from 'react';

import PropTypes from 'prop-types';

import { Form } from './../../common';

const Login = ({ handleLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const loginUser = {
			email,
			password,
		};
		try {
			const response = await fetch('http://localhost:4000/login', {
				method: 'POST',
				body: JSON.stringify(loginUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Unable to log in.');
			}
			const loginResult = await response.json();
			if (loginResult.successful) {
				const token = loginResult.result;
				const name = loginResult.user.name;
				handleLogin(token, name);
				navigate('/courses', { replace: true });
			} else {
				throw new Error('Unable to log in.');
			}
		} catch (error) {
			console.error(error);
			setError(
				'Incorrect login credentials. Please verify your email and password.'
			);
		}
	};
	return (
		<Form onSubmit={handleSubmit}>
			<h2 className='auth'>Login</h2>
			<Input
				id='registrationEmail'
				labelText={loginEmailLabelText}
				placeholdetText={loginEmailPlaceholdetText}
				type='text'
				className='inputAuth'
				labelClassName='labelAuth'
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				id='registrationPassword'
				labelText={loginPasswordLabelText}
				placeholdetText={loginPasswordPlaceholdetText}
				type='password'
				className='inputAuth'
				labelClassName='labelAuth'
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Button
				buttonType='submit'
				className='button'
				buttonText={loginButtonText}
			/>
			{error && <p className='auth'>{error}</p>}
			<p className='auth'>
				If you not have an account you can &nbsp;
				<Link to='/registration' className='auth'>
					Registration
				</Link>
			</p>
		</Form>
	);
};

Login.propTypes = {
	handleLogin: PropTypes.func.isRequired,
};

export default Login;
