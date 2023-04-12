import { backToCoursesButtonText } from './../../constants';

import { pipeDuration } from '../../helpers';
import { Button } from '../../common';
import * as selectors from './../../store/selectors';

import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Article } from './CourseInfo.style';

const CourseInfo = () => {
	const { courseId } = useParams();
	const allCourses = useSelector(selectors.courses);
	const allAuthors = useSelector(selectors.authors);

	const authorsObject = allAuthors.reduce((props, author) => {
		props[author.id] = author.name;
		return props;
	}, {});

	const course = allCourses?.find((course) => course.id === courseId);

	if (!course) {
		return (
			<Article>
				<h2>Course not found</h2>
			</Article>
		);
	}

	const { id, title, description, creationDate, duration, authors } = course;

	const authorsArray = authors.map((authorId) => authorsObject[authorId]);

	return (
		<Article>
			<Link to='/courses'>
				<Button
					buttonType='button'
					buttonText={backToCoursesButtonText}
					className='backToCourses'
				/>
			</Link>
			<h2 className='courseInfoTitle'>{title}</h2>
			<section className='courseInfo'>
				<p className='courseDescription'>{description}</p>
				<section className='courseDetails'>
					<p>
						<b>ID:</b> {id}
					</p>
					<p>
						<b>Duration:</b> {pipeDuration(duration)} hours
					</p>
					<p>
						<b>Created: </b> {creationDate}
					</p>
					<p>
						<b>Authors:</b> {authorsArray.join(', ')}
					</p>
				</section>
			</section>
		</Article>
	);
};

export default CourseInfo;
