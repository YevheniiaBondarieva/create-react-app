import styled from 'styled-components';

export const Main = styled.main`
	.createCourse,
	.deleteAuthor,
	.addAuthor {
		float: right;
		width: 8rem;
		height: 1.7rem;
	}
	input.courseTitle {
		height: 1.5rem;
		padding-left: 10px;
		margin-bottom: 10px;
	}
	section.courseTitleInputAndCreateCourseButton,
	section.forDescription {
		display: block;
	}
	.labelForTitle {
		display: block;
		margin-bottom: 7px;
	}
	.labelForDescription {
		display: block;
		margin-bottom: 5px;
	}
	textarea {
		width: 97.7%;
		padding-left: 1rem;
		padding-top: 1rem;
		border: 2px solid var(--textarea-border-color);
	}
	section.authorsAndDuration {
		border: 2px solid black;
		margin-top: 10px;
		display: grid;
		padding: 1rem;
		grid-template-columns: 1fr 1fr;
	}
	h3.authorsAndDuration {
		text-align: center;
	}
	.labelForAuthorName,
	.labelForDuration {
		display: block;
		margin-bottom: 7px;
	}
	input.author,
	input.courseDuration {
		display: block;
		height: 1.5rem;
		padding-left: 10px;
		margin-bottom: 10px;
		width: 85%;
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
		font-size: var(--heading-font-size);
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
