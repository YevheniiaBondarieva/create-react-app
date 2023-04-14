import styled from 'styled-components';

export const Main = styled.main`
	section.coursesSection {
		display: flex;
		justify-content: space-between;
	}
	.addCourseButton {
		margin-right: 1rem;
		width: 12rem;
		height: 2rem;
	}
`;

export const EmptyContainer = styled.section`
	margin: 1rem;
	padding: 1rem;
	border: 3px solid rgb(6, 197, 143);
	border-radius: 3px;
	text-align: center;
`;
