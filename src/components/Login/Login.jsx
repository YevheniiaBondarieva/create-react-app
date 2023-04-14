import { Input, Button } from '../../common';
import { loginSuccess, loginFailure } from '../../store/user/actionCreators';
import * as services from './../../store/services';
import { Form } from './../../common';

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
import { useDispatch } from 'react-redux';

const Login = ({ handleLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const loginUser = {
			email,
			password,
		};
		try {
			const loginResult = await services.login(loginUser);
			if (loginResult.successful) {
				const token = loginResult.result;
				const name = loginResult.user.name;
				handleLogin(token, name);
				dispatch(loginSuccess({ name, email, token }));
				navigate('/courses', { replace: true });
			} else {
				dispatch(loginFailure());
				throw new Error('Unable to log in.');
			}
		} catch (error) {
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
				autoComplete='on'
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
