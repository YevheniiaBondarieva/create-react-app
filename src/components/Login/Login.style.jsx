import styled from 'styled-components';

export const Form = styled.form`
	margin: 1rem;
	margin-top: 20px;
	border: 3px solid rgb(145, 214, 243);
	border-radius: 1px;
	display: flex;
	flex-direction: column;
	padding: 15%;
	height: 100%;
	width: 97.3%;
	box-sizing: border-box;
	h2.login {
		align-self: center;
	}
	input.login,
	label.login,
	p.login {
		width: 55%;
		align-self: center;
		margin-bottom: 10px;
	}
	button.loginButton {
		width: 30%;
		align-self: center;
		padding: 7px;
		margin-top: 10px;
		border: 2px solid rgb(191, 112, 243);
		background-color: white;
		font-size: 16px;
	}
	input.login {
		padding: 7px;
		margin-left: 16px;
		border: 2px solid rgb(237, 174, 57);
	}
	a.registartion {
		text-decoration: none;
		color: blue;
	}
`;
