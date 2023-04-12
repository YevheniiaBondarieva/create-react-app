import { Button } from '../../../../common';
import { pipeDuration } from '../../../../helpers';
import {
	showCourseButtonText,
	updateCourseButtonText,
	deleteCourseButtonText,
} from './../../../../constants';
import { deleteCourse } from './../../../../store/courses/actionCreators';

import { Section } from './CourseCard.style';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	courseAuthors,
}) => {
	const dispatch = useDispatch();

	function deleteCourseItem(courseId) {
		dispatch(deleteCourse(courseId));
	}

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
					<Button
						buttonType='button'
						className='updateCourse'
						buttonText={updateCourseButtonText}
					/>
					<Button
						buttonType='button'
						className='deleteCourse'
						buttonText={deleteCourseButtonText}
						onClick={() => deleteCourseItem(id)}
					/>
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
