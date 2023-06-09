import { Button, Input } from '../../common';
import { dateGeneratop, pipeDuration } from '../../helpers';

import {
	createCourseButtonText,
	createAuthorButtonText,
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
} from './../../constants';
import * as selectors from './../../store/selectors';
import { addCourse } from '../../store/courses/actionCreators';
import { addAuthor } from '../../store/authors/actionCreators';

import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Main } from './CreateCourse.style';

const CreateCourse = () => {
	const dispatch = useDispatch();
	const allAuthors = useSelector(selectors.authors);
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [courseAuthors, setCourseAuthor] = useState([]);
	const [courseDuration, setCourseDuration] = useState({
		defaultCourseDuration,
	});
	const [durationDisplay, setDurationDisplay] = useState(pipeDuration(0));
	const [authors, setAuthors] = useState([]);
	const [newAuthorName, setNewAuthorName] = useState('');

	useEffect(() => {
		setAuthors([...allAuthors]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const navigate = useNavigate();

	const courseTitleExists = Boolean(courseTitle);
	const validCourseDescription = courseDescription.length >= 2;
	const validCourseDuration = courseDuration > 0;
	const validCourseAuthors = courseAuthors.length > 0;

	const createCourse = () => {
		if (
			courseTitleExists &&
			validCourseDescription &&
			validCourseDuration &&
			validCourseAuthors
		) {
			const newCourse = {
				id: uuidv4(),
				title: courseTitle,
				description: courseDescription,
				creationDate: dateGeneratop(),
				duration: Number(courseDuration),
				authors: courseAuthors.map((item) => item['id']),
			};
			dispatch(addCourse(newCourse));
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
				id: uuidv4(),
				name: newAuthorName,
			};
			dispatch(addAuthor(newAuthor));
			authors.push(newAuthor);
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
		setCourseAuthor([...courseAuthors, author]);
		setAuthors(authors.filter(({ id }) => id !== author.id));
	};

	const deleteAuthor = (author) => {
		setCourseAuthor(courseAuthors.filter(({ id }) => id !== author.id));
		setAuthors([...authors, author]);
	};

	return (
		<Main>
			<form>
				<section className='courseTitleInputAndCreateCourseButton'>
					<Input
						id='title'
						labelText={courseTitleLabelText}
						labelClassName='label'
						className='courseTitle input'
						placeholdetText={courseTitlePlaceholdetText}
						type='text'
						onChange={(e) => setCourseTitle(e.target.value)}
						required
					/>
					<Button
						buttonType='button'
						className='createCourse button'
						buttonText={createCourseButtonText}
						onClick={() => {
							createCourse();
						}}
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
							required
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
