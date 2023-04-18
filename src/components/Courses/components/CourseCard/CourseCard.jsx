import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '../../../../common';
import { pipeDuration } from '../../../../helpers';
import { showCourseButtonText, roles } from './../../../../constants';
import updateButton from './../../../../assets/updateButton.svg';
import deleteButton from './../../../../assets/deleteButton.svg';

import * as selectors from './../../../../store/selectors';
import { removeCourse } from '../../../../store/courses/thunk';

import { Section } from './CourseCard.style';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	courseAuthors,
}) => {
	const role = useSelector(selectors.role);
	const dispatch = useDispatch();

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
					<b>Created:</b> {creationDate.replace(/\//g, '.')}
				</p>
				<div className='courseButtons'>
					<Link to={`/courses/${id}`} className='showCourse'>
						<Button
							buttonType='button'
							className='showCourse'
							buttonText={showCourseButtonText}
						/>
					</Link>
					{role === roles.admin ? (
						<div className='updateAndDeleteButtons'>
							<Link to={`/courses/update/${id}`}>
								<Button
									buttonType='button'
									className='updateCourse'
									buttonIcon={<img src={updateButton} alt='update' />}
								/>
							</Link>
							<Button
								buttonType='button'
								className='deleteCourse'
								buttonIcon={<img src={deleteButton} alt='delete' />}
								onClick={() => dispatch(removeCourse(id))}
							/>
						</div>
					) : null}
				</div>
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
