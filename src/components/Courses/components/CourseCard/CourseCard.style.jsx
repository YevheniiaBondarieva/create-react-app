import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	padding: 1rem;
	padding-bottom: 0px;
	padding-top: 0px;
	border: 3px solid var(--spring-green-color);
	border-radius: 3px;
	div.courseTitleAndDescription {
		flex-basis: 60%;
		margin-right: 10px;
	}
	h2.courseTitleAndDescription {
		font-family: var(--arial-font-face);
		font-size: var(--24px-font-size);
	}
	div.courseInfo {
		flex-basis: 30%;
	}
	p.courseInfo {
		line-height: 1.3;
	}
	.courseInfoAuthors {
		padding-top: 10px;
		text-decoration: none;
		text-overflow: ellipsis;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		width: 80%;
	}
	.courseButtons {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.showCourse {
		margin-top: 7px;
		width: 10rem;
		height: 2rem;
		margin-right: 7px;
		margin-bottom: 3px;
	}
	.updateAndDeleteButtons {
		margin-top: 20px;
		margin-bottom: 3px;
	}
	.updateCourse,
	.deleteCourse {
		margin-right: 7px;
		height: 2rem;
	}
	a.showCourse {
		text-decoration: none;
	}
`;
