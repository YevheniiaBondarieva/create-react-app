import {
	backToCoursesButtonText,
	mockedCoursesList,
	mockedAuthorsList,
} from './../../constants';

import { pipeDuration } from '../../helpers';

import { Button } from '../../common';

import { Link, useParams } from 'react-router-dom';

import { Article } from './CourseInfo.style';

const CourseInfo = () => {
	const { courseId } = useParams();
	const authorsArray = [];

	const course = mockedCoursesList.find((course) => course.id === courseId);

	if (!course) {
		return (
			<Article>
				<h2>Course not found</h2>
			</Article>
		);
	}

	const { id, title, description, creationDate, duration, authors } = course;

	authors.forEach((authorId) => {
		const { name } = mockedAuthorsList.find((author) => author.id === authorId);
		authorsArray.push(name);
	});

	return (
		<Article>
			<Link to='/courses'>
				<Button
					buttonType='button'
					buttonText={backToCoursesButtonText}
					className='backToCourses'
				/>
			</Link>
			<h2 className='courseInfo'>{title}</h2>
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
						<b>Authors:</b> {authorsArray.toString().split(',').join(', ')}
					</p>
				</section>
			</section>
		</Article>
	);
};

export default CourseInfo;
