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
	border: 3px solid var(--course-border-color);
	border-radius: 3px;
	div.courseTitleAndDescription {
		flex-basis: 60%;
		margin-right: 10px;
	}
	h2.courseTitleAndDescription_title {
		font-family: 'Arial Regular';
		font-size: var(--heading-font-size);
	}
	div.courseInfo {
		flex-basis: 30%;
	}
	div.courseInfo > p {
		line-height: 1.3;
	}
	.courseInfo_authors {
		padding-top: 10px;
		text-decoration: none;
		text-overflow: ellipsis;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		width: 80%;
	}
	.showCourse {
		margin-top: 30px;
		width: 10rem;
		height: 2rem;
		float: center;
		display: block;
		margin-left: auto;
		margin-right: auto;
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
			<div className='courseTitleAndDescription'>
				<h2 className='courseTitleAndDescription_title'>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='courseInfo'>
				<p className='courseInfo_authors'>
					<b>Authors: </b>
					{courseAuthors}
				</p>
				<p>
					<b>Duration:</b> {pipeDuration(duration)} hours
				</p>
				<p>
					{' '}
					<b>Created:</b> {creationDate.replace(/\//g, '.')}
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
