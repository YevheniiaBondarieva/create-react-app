import { Button } from '../../../../common';
import { pipeDuration } from '../../../../helpers';

import { showCourseButtonText } from './../../../../constants';

import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	padding: 1rem;
	padding-bottom: 0px;
	padding-top: 0px;
	border: 3px solid rgb(6, 197, 143);
	border-radius: 3px;
	div:first-child {
		flex-basis: 60%;
		margin-right: 10px;
		h2 {
			font-family: Arial, sans-serif;
			font-size: 26px;
		}
	}
	div:last-child {
		flex-basis: 30%;
		p {
			line-height: 1.3;
		}
		p:first-child {
			padding-top: 10px;
			text-decoration: none;
			text-overflow: ellipsis;
			display: block;
			overflow: hidden;
			white-space: nowrap;
			width: 80%;
		}
		.showCourse {
			border: 2px solid rgb(191, 112, 243);
			margin-top: 30px;
			width: 10rem;
			height: 2rem;
			color: black;
			float: center;
			background-color: white;
			display: block;
			margin-left: auto;
			margin-right: auto;
			font-size: 16px;
			font-weight: 500;
		}
	}
`;

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	courseAuthors,
}) => {
	return (
		<Section>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<p>
					<b>Authors: </b>
					{courseAuthors}
				</p>
				<p>
					<b>Duration:</b> {pipeDuration(duration)} hours
				</p>
				<p>
					{' '}
					<b>Created:</b> {creationDate.split('/').join('.')}
				</p>
				<p>
					<Button
						buttonType='button'
						className='showCourse'
						buttonText={showCourseButtonText}
					/>
				</p>
			</div>
		</Section>
	);
};

export default CourseCard;
