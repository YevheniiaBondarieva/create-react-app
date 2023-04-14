import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Input } from '../../common';
import { dateGeneratop, pipeDuration } from '../../helpers';
import {
	createCourseButtonText,
	createAuthorButtonText,
	updateCourseButtonText,
	deleteAuthorButtonText,
	addAuthorButtonText,
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

import * as selectors from '../../store/selectors';
import {
	attachAuthor,
	detachAuthor,
	detachAuthors,
} from '../../store/authors/actionCreators';
import { addCourse, updateCourse } from './../../store/courses/thunk';
import { addAuthor } from '../../store/authors/thunk';

import { Main } from './CourseForm.style';

const CreateCourse = () => {
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
		setAuthors([
			...allAuthors.filter((item) => {
				return item.isAttach === undefined || !item.isAttach;
			}),
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allAuthors, courseId]);

	useEffect(() => {
		if (courseId) {
			const currentCourse = allCourses.find((course) => course.id === courseId);
			if (currentCourse) {
				const { title, description, duration, authors } = currentCourse;
				setCourseTitle(title);
				setCourseDescription(description);
				setCourseDuration(duration);
				setDurationDisplay(pipeDuration(duration));
				setCourseAuthors([
					...allAuthors
						.map((author) => ({
							...author,
							isAttach: authors.includes(author.id),
						}))
						.filter((author) => author.isAttach),
				]);
				setAuthors([
					...allAuthors
						.map((author) => ({
							...author,
							isAttach: !authors.includes(author.id),
						}))
						.filter((author) => author.isAttach),
				]);
			} else {
				window.alert('Invalid course ID!');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseId]);

	const courseTitleExists = Boolean(courseTitle);
	const validCourseDescription = courseDescription.length >= 2;
	const validCourseDuration = courseDuration > 0;
	const validCourseAuthors = courseAuthors.length > 0;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			courseTitleExists &&
			validCourseDescription &&
			validCourseDuration &&
			validCourseAuthors
		) {
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
		} else {
			window.alert('Please, fill in all fields');
		}
	};

	const authorList = authors.map((author) => {
		const { id, name } = author;
		return (
			<div id={id} key={id} className='authorsList'>
				<p className='authorsList'>{name}</p>
				<Button
					buttonType='button'
					className='addAuthor button'
					buttonText={addAuthorButtonText}
					onClick={() => addNewAuthor(author)}
				/>
			</div>
		);
	});

	const createAuthor = () => {
		if (newAuthorName.length >= 2) {
			const newAuthor = {
				name: newAuthorName,
			};
			dispatch(addAuthor(newAuthor));
			setNewAuthorName('');
		}
	};

	const displayAuthorCourse = courseAuthors.map((author) => {
		return (
			<div id={author.id} key={author.id} className='courseAuthors'>
				<p className='courseAuthors'>{author.name}</p>
				<Button
					buttonType='button'
					className='deleteAuthor button'
					buttonText={deleteAuthorButtonText}
					onClick={() => deleteAuthor(author)}
				/>
			</div>
		);
	});

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
			<form onSubmit={(e) => handleSubmit(e)}>
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
					<section>
						<h3 className='authorsAndDuration'>Authors</h3>
						{authorList}
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
								setDurationDisplay(pipeDuration(e.target.value));
								setCourseDuration(e.target.value);
							}}
						/>
						<p className='courseDuration'>
							Duration:&nbsp;
							<span className='courseDuration'>{durationDisplay}</span>
							&nbsp;hours
						</p>
					</section>
					<section>
						<h3 className='authorsAndDuration'>Course authors</h3>
						{displayAuthorCourse.length > 0 ? (
							displayAuthorCourse
						) : (
							<p className='listIsEmpty'>Author list is empty</p>
						)}
					</section>
				</section>
			</form>
		</Main>
	);
};

export default CreateCourse;
