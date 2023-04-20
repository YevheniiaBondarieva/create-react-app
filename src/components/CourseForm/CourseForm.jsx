import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Input } from '../../common';
import { dateGeneratop, pipeDuration } from '../../helpers';
import {
	createCourseButtonText,
	createAuthorButtonText,
	updateCourseButtonText,
	addAuthorLabelText,
	addAuthorPlaceholdetInputText,
	courseDurationPlaceholdetText,
	courseDuratinLabelText,
	courseDescriptionPlaceholderText,
	courseDescriptionLabelText,
	courseTitleLabelText,
	courseTitlePlaceholdetText,
	defaultCourseDuration,
	minimumCourseDescriptionLength,
	minimumAuthorNameLength,
} from '../../constants';
import Authors from './components/Authors/Authors';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';

import * as selectors from '../../store/selectors';
import {
	attachAuthor,
	detachAuthor,
	detachAuthors,
} from '../../store/authors/actionCreators';
import { addCourse, updateCourse } from './../../store/courses/thunk';
import { addAuthor } from '../../store/authors/thunk';

import { Main } from './CourseForm.style';

const CourseForm = () => {
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const allAuthors = useSelector(selectors.authors);
	const allCourses = useSelector(selectors.courses);
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [courseDuration, setCourseDuration] = useState({
		defaultCourseDuration,
	});
	const [durationDisplay, setDurationDisplay] = useState(pipeDuration(0));
	const [authors, setAuthors] = useState(allAuthors);
	const [newAuthorName, setNewAuthorName] = useState('');

	useEffect(() => {
		const notAttachedAuthors = [
			...allAuthors.filter((item) => {
				return item.isAttach === undefined || !item.isAttach;
			}),
		];
		setAuthors(notAttachedAuthors);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allAuthors, courseId]);

	useEffect(() => {
		if (!courseId) {
			return;
		}
		const currentCourse = allCourses.find((course) => course.id === courseId);
		if (!currentCourse) {
			window.alert('Invalid course ID!');
			return;
		}
		const { title, description, duration, authors } = currentCourse;
		setCourseTitle(title);
		setCourseDescription(description);
		setCourseDuration(duration);
		setDurationDisplay(pipeDuration(duration));
		const isAttachedAuthors = [
			...allAuthors
				.map((author) => ({
					...author,
					isAttach: authors.includes(author.id),
				}))
				.filter((author) => author.isAttach),
		];
		const notAttachedAuthors = [
			...allAuthors
				.map((author) => ({
					...author,
					isAttach: !authors.includes(author.id),
				}))
				.filter((author) => author.isAttach),
		];
		setCourseAuthors(isAttachedAuthors);
		setAuthors(notAttachedAuthors);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseId]);

	const courseTitleExists = Boolean(courseTitle);
	const validCourseDescription =
		courseDescription.length >= minimumCourseDescriptionLength;
	const validCourseDuration = courseDuration > 0;
	const validCourseAuthors = courseAuthors.length > 0;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!courseTitleExists ||
			!validCourseDescription ||
			!validCourseDuration ||
			!validCourseAuthors
		) {
			window.alert('Please, fill in all fields');
			return;
		}
		const newCourse = {
			title: courseTitle,
			description: courseDescription,
			duration: Number(courseDuration),
			authors: courseAuthors.map((item) => item['id']),
		};
		if (courseId) {
			dispatch(updateCourse(courseId, newCourse));
		} else {
			dispatch(addCourse({ ...newCourse, creationDate: dateGeneratop() }));
		}
		dispatch(detachAuthors());
		navigate('/courses');
	};

	const createAuthor = () => {
		if (newAuthorName.length < minimumAuthorNameLength) {
			return;
		}
		const newAuthor = {
			name: newAuthorName,
		};
		dispatch(addAuthor(newAuthor));
		setNewAuthorName('');
	};

	const addNewAuthor = (author) => {
		setCourseAuthors([...courseAuthors, author]);
		dispatch(attachAuthor(author.id));
	};

	const deleteAuthor = (author) => {
		setCourseAuthors(courseAuthors.filter(({ id }) => id !== author.id));
		dispatch(detachAuthor(author.id));
	};

	return (
		<Main>
			<form data-testid='courseForm' onSubmit={(e) => handleSubmit(e)}>
				<section className='courseTitleInputAndCreateCourseButton'>
					<Input
						id='title'
						labelText={courseTitleLabelText}
						labelClassName='label'
						className='courseTitle input'
						placeholdetText={courseTitlePlaceholdetText}
						type='text'
						value={courseTitle}
						onChange={(e) => setCourseTitle(e.target.value)}
						required
					/>
					<Button
						buttonType='submit'
						className='createCourse button'
						buttonText={
							courseId ? updateCourseButtonText : createCourseButtonText
						}
					/>
				</section>
				<section className='forDescription'>
					<label htmlFor='description' className='label'>
						{courseDescriptionLabelText}
					</label>
					<textarea
						id='description'
						name='description'
						rows='5'
						className='textarea'
						value={courseDescription}
						minLength={minimumCourseDescriptionLength}
						placeholder={courseDescriptionPlaceholderText}
						onChange={(e) => setCourseDescription(e.target.value)}
						required
					/>
				</section>
				<section className='authorsAndDuration'>
					<section>
						<h3 className='authorsAndDuration'>Add author</h3>
						<Input
							id='authorName'
							className='author input'
							labelText={addAuthorLabelText}
							labelClassName='label'
							placeholdetText={addAuthorPlaceholdetInputText}
							minLength={minimumAuthorNameLength}
							type='text'
							onChange={(e) => {
								setNewAuthorName(e.target.value);
							}}
						/>
						<Button
							buttonType='button'
							className='createAuthor'
							buttonText={createAuthorButtonText}
							onClick={() => createAuthor()}
						/>
					</section>
					<section data-testid='authors'>
						<h3 className='authorsAndDuration'>Authors</h3>
						{<Authors authors={authors} addNewAuthor={addNewAuthor} />}
					</section>
					<section>
						<h3 className='authorsAndDuration'>Duration</h3>
						<Input
							id='duration'
							labelText={courseDuratinLabelText}
							labelClassName='label'
							className='courseDuration input'
							placeholdetText={courseDurationPlaceholdetText}
							type='number'
							min='1'
							required
							onChange={(e) => {
								setCourseDuration(e.target.value);
								setDurationDisplay(pipeDuration(e.target.value));
							}}
						/>
						<p className='courseDuration'>
							Duration:&nbsp;
							<span className='courseDuration'>{durationDisplay}</span>
							&nbsp;hours
						</p>
					</section>
					<section data-testid='courseAuthors'>
						<h3 className='authorsAndDuration'>Course authors</h3>
						{courseAuthors.length > 0 ? (
							<CourseAuthors
								courseAuthors={courseAuthors}
								deleteAuthor={deleteAuthor}
							/>
						) : (
							<p className='listIsEmpty'>Author list is empty</p>
						)}
					</section>
				</section>
			</form>
		</Main>
	);
};

export default CourseForm;
