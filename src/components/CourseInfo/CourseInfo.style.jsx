import styled from 'styled-components';

export const Article = styled.article`
	margin: 1rem;
	margin-top: 20px;
	padding: 1rem;
	border: 3px solid rgb(6, 175, 247);
	border-radius: 1px;
	button.backToCourses {
		border: none;
		background: none;
	}
	h2.courseInfo {
		text-align: center;
	}
	section.courseInfo {
		display: flex;
		justify-content: space-between;
	}
	p.courseDescription {
		flex-basis: 50%;
	}
	section.courseDetails {
		flex-basis: 30%;
	}
`;
