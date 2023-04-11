import styled from 'styled-components';

const Form = styled.form`
	margin: 1rem;
	margin-top: 20px;
	border: 3px solid var(--blue-ice-color);
	border-radius: 1px;
	display: flex;
	flex-direction: column;
	padding: 15%;
	height: 100%;
	box-sizing: border-box;
	h2.auth {
		align-self: center;
	}
	.inputAuth,
	.labelAuth,
	p.auth {
		width: 40vw;
		align-self: center;
		margin-bottom: 10px;
	}
	.button {
		width: 12rem;
		align-self: center;
		padding: 7px;
		margin-top: 10px;
	}
	.inputAuth {
		padding: 7px;
		margin-left: 16px;
	}
	a.auth {
		text-decoration: none;
		color: var(--picasso-blue-color);
	}
`;

export default Form;
