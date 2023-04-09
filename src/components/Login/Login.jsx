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

import { Form } from './Login.style';

const Login = ({ handleLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate(); // отримуємо navigate

	const handleSubmit = async (e) => {
		e.preventDefault();

		const loginUser = {
			email,
			password,
		};

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(loginUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const loginResult = await response.json();
		if (loginResult.successful) {
			const token = loginResult.result;
			const name = loginResult.user.name;
			handleLogin(token, name);
			navigate('/courses', { replace: true });
		}
	};
	return (
		<Form onSubmit={handleSubmit}>
			<h2 className='login'>Login</h2>
			<Input
				id='registrationEmail'
				labelText={loginEmailLabelText}
				placeholdetText={loginEmailPlaceholdetText}
				type='text'
				className='login'
				labelClassName='login'
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				id='registrationPassword'
				labelText={loginPasswordLabelText}
				placeholdetText={loginPasswordPlaceholdetText}
				type='text'
				className='login'
				labelClassName='login'
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Button
				buttonType='submit'
				className='loginButton'
				buttonText={loginButtonText}
			/>
			<p className='login'>
				If you not have an account you can
				<Link to='/registration' className='registartion'>
					{' '}
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
