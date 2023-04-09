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
	h2.registration {
		align-self: center;
	}
	input.registation,
	label.registation,
	p.registation {
		width: 55%;
		align-self: center;
		margin-bottom: 10px;
	}
	button.registrationButton {
		width: 30%;
		align-self: center;
		padding: 7px;
		margin-top: 10px;
	}
	input.registation {
		padding: 7px;
		margin-left: 16px;
	}
	a.loginLink {
		text-decoration: none;
		color: blue;
	}
`;
