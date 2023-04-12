import { Button } from '../../../../common';
import { pipeDuration } from '../../../../helpers';

import { showCourseButtonText } from './../../../../constants';

import { Section } from './CourseCard.style';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	courseAuthors,
}) => {
	return (
		<Section>
			<div className='courseTitleAndDescription'>
				<h2 className='courseTitleAndDescription'>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='courseInfo'>
				<p className='courseInfoAuthors'>
					<b>Authors: </b>
					{courseAuthors}
				</p>
				<p className='courseInfo'>
					<b>Duration:</b> {pipeDuration(duration)} hours
				</p>
				<p className='courseInfo'>
					{' '}
					<b>Created:</b> {creationDate.replace(/\//g, '.')}
				</p>
				<p className='courseInfo'>
					<Link to={`/courses/${id}`} className='showCourse'>
						<Button
							buttonType='button'
							className='showCourse'
							buttonText={showCourseButtonText}
						/>
					</Link>
				</p>
			</div>
		</Section>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	courseAuthors: PropTypes.string.isRequired,
};

export default CourseCard;
