import styled from 'styled-components';

export const Main = styled.main`
	.button {
		float: right;
		width: 8rem;
		height: 1.7rem;
	}
	.input {
		height: 1.5rem;
		padding-left: 10px;
		margin-bottom: 10px;
	}
	section.courseTitleInputAndCreateCourseButton,
	section.forDescription {
		display: block;
	}
	.label {
		display: block;
		margin-bottom: 7px;
	}
	.textarea {
		width: 80vw;
		padding-left: 1rem;
		padding-top: 1rem;
		border: 2px solid var(--orange-color);
	}
	section.authorsAndDuration {
		border: 2px solid var(--black-color);
		margin-top: 10px;
		display: grid;
		padding: 1rem;
		grid-template-columns: 1fr 1fr;
	}
	h3.authorsAndDuration {
		text-align: center;
	}

	input.author,
	input.courseDuration {
		display: block;
		width: 40vw;
		margin-right: 3rem;
	}
	.createAuthor {
		width: 8rem;
		height: 1.7rem;
		display: block;
		margin: 0 auto;
	}

	p.courseDuration {
		font-size: 24px;
	}
	span.courseDuration {
		font-weight: bold;
		font-size: var(--24px-font-size);
	}
	p.courseAuthors,
	p.authorsList {
		display: inline-block;
	}
	button.addAuthor,
	button.deleteAuthor {
		margin-top: 10px;
		margin-right: 20%;
	}
	.listIsEmpty {
		text-align: center;
	}
`;
