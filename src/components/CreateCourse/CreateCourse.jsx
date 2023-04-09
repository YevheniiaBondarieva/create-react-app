import styled from 'styled-components';

import { Button, Input } from '../../common';
import { dateGeneratop, pipeDuration } from '../../helpers';

import {
	mockedAuthorsList,
	mockedCoursesList,
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

import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect } from 'react';

const Main = styled.main`
	.createCourse,
	.createAuthor,
	.deleteAuthor,
	.addAuthor {
		float: right;
		width: 8rem;
		height: 1.7rem;
	}
	#courseTitle {
		height: 1.5rem;
		padding-left: 10px;
		margin-bottom: 10px;
	}
	section.courseTitleInputAndCreateCourseButton,
	section.forDescription {
		display: block;
	}
	.labelForTitle {
		display: block;
		margin-bottom: 7px;
	}
	.labelForDescription {
		display: block;
		margin-bottom: 5px;
	}
	textarea {
		width: 97.7%;
		padding-left: 1rem;
		padding-top: 1rem;
		border: 2px solid var(--textarea-border-color);
	}
	section.authorsAndDuration {
		border: 2px solid black;
		margin-top: 10px;
		display: grid;
		padding: 1rem;
		grid-template-columns: 1fr 1fr;
	}
	section.authorsAndDuration_createAuthor > h3,
	section.authorsAndDuration_authorsList > h3,
	section.authorsAndDuration_duration > h3,
	section.authorsAndDuration_courseAuthors > h3 {
		text-align: center;
	}
	.labelForAuthorName,
	.labelForDuration {
		display: block;
		margin-bottom: 7px;
	}
	#authorName,
	#duration {
		display: block;
		height: 1.5rem;
		padding-left: 10px;
		margin-bottom: 10px;
		width: 80%;
	}
	.createAuthor {
		display: block;
		float: none;
	}

	#duration + p {
		font-size: 24px;
	}
	#duration + p > span {
		font-weight: bold;
		font-size: var(--heading-font-size);
	}
	section.authorsAndDuration_authorsList > div > p,
	section.authorsAndDuration_authorsList > div > p,
	section.authorsAndDuration_courseAuthors > div > p,
	section.authorsAndDuration_courseAuthors > div > p {
		display: inline-block;
	}
	section.authorsAndDuration_authorsList > div > button,
	section.authorsAndDuration_authorsList > div > button,
	section.authorsAndDuration_courseAuthors > div > button,
	section.authorsAndDuration_courseAuthors > div > button {
		margin-top: 10px;
		margin-right: 20%;
	}
	.listIsEmpty {
		text-align: center;
	}
`;

const CreateCourse = ({ hideForm }) => {
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
		setAuthors([...mockedAuthorsList]);
	}, []);

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
				duration: courseDuration,
				authors: courseAuthors.map((item) => item['id']),
			};
			mockedCoursesList.push(newCourse);
			hideForm();
		} else {
			window.alert('Please, fill in all fields');
		}
	};

	const authorList = authors.map((author) => {
		const { id, name } = author;
		return (
			<div id={id} key={id}>
				<p>{name}</p>
				<Button
					buttonType='button'
					className='addAuthor'
					buttonText={addAuthorButtonText}
					onClick={() => addAuthor(author)}
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
			mockedAuthorsList.push(newAuthor);
			authors.push(newAuthor);
			setNewAuthorName('');
		}
	};

	const displayAuthorCourse = courseAuthors.map((author) => {
		return (
			<div id={author.id} key={author.id}>
				<p>{author.name}</p>
				<Button
					buttonType='button'
					className='deleteAuthor'
					buttonText={deleteAuthorButtonText}
					onClick={() => deleteAuthor(author)}
				/>
			</div>
		);
	});

	const addAuthor = (author) => {
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
						id='courseTitle'
						labelText={courseTitleLabelText}
						labelClassName='labelForTitle'
						placeholdetText={courseTitlePlaceholdetText}
						type='text'
						onChange={(e) => setCourseTitle(e.target.value)}
						required
					/>
					<Button
						buttonType='button'
						className='createCourse'
						buttonText={createCourseButtonText}
						onClick={() => {
							createCourse();
						}}
					/>
				</section>
				<section className='forDescription'>
					<label htmlFor='description' className='labelForDescription'>
						{courseDescriptionLabelText}
					</label>
					<textarea
						id='description'
						name='description'
						rows='5'
						minLength={minimumCourseDescriptionLength}
						placeholder={courseDescriptionPlaceholderText}
						onChange={(e) => setCourseDescription(e.target.value)}
						required
					/>
				</section>
				<section className='authorsAndDuration'>
					<section className='authorsAndDuration_createAuthor'>
						<h3>Add author</h3>
						<Input
							id='authorName'
							labelText={addAuthorLabelText}
							labelClassName='labelForAuthorName'
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
					<section className='authorsAndDuration_authorsList'>
						<h3>Authors</h3>
						{authorList}
					</section>
					<section className='authorsAndDuration_duration'>
						<h3>Duration</h3>
						<Input
							id='duration'
							labelText={courseDuratinLabelText}
							labelClassName='labelForDuration'
							placeholdetText={courseDurationPlaceholdetText}
							type='number'
							min='1'
							required
							onChange={(e) => {
								setDurationDisplay(pipeDuration(e.target.value));
								setCourseDuration(e.target.value);
							}}
						/>
						<p>
							Duration: <span>{durationDisplay}</span> hours
						</p>
					</section>
					<section className='authorsAndDuration_courseAuthors'>
						<h3>Course authors</h3>
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
