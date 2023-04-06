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
	margin: 1rem;
	margin-top: 0px;
	padding: 1rem;
	border: 3px solid rgb(6, 175, 247);
	border-radius: 1px;

	form {
		.createCourse,
		.createAuthor,
		.deleteAuthor,
		.addAuthor {
			float: right;
			border: 2px solid rgb(191, 112, 243);
			width: 8rem;
			height: 1.7rem;
			color: black;
			background-color: white;
			font-size: 14px;
			font-weight: 400;
		}
		#courseTitle {
			border: 2px solid rgb(232, 187, 10);
			height: 1.5rem;
			color: black;
			background-color: white;
			font-size: 16px;
			font-weight: 500;
			padding-left: 10px;
			margin-bottom: 10px;
		}
		section {
			display: block;
			label[for='courseTitle'] {
				display: block;
				margin-bottom: 7px;
			}
			label[for='description'] {
				display: block;
				margin-bottom: 5px;
			}
			textarea {
				width: 97.7%;
				padding-left: 1rem;
				padding-top: 1rem;
				border: 2px solid rgb(232, 232, 10);
			}
		}
		section.authorsAndDuration {
			border: 2px solid black;
			margin-top: 10px;
			display: grid;
			padding: 1rem;
			grid-template-columns: 1fr 1fr;
			section {
				h3 {
					text-align: center;
				}
				label[for='authorName'],
				label[for='duration'] {
					display: block;
					margin-bottom: 7px;
				}
				#authorName,
				#duration {
					display: block;
					border: 2px solid rgb(232, 187, 10);
					height: 1.5rem;
					color: black;
					background-color: white;
					font-size: 16px;
					font-weight: 500;
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
					font-size: 26px;
				}
				div > p {
					display: inline-block;
				}
				div > button {
					margin-top: 10px;
					margin-right: 20%;
				}
				.listIsEmpty {
					text-align: center;
				}
			}
		}
	}
`;

const CreateCourse = ({ notDisplayForm }) => {
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

	const createCourse = () => {
		if (
			courseTitle &&
			courseDescription.length >= 2 &&
			courseDuration > 0 &&
			courseAuthors.length > 0
		) {
			mockedCoursesList.push({
				id: uuidv4(),
				title: courseTitle,
				description: courseDescription,
				creationDate: dateGeneratop(),
				duration: courseDuration,
				authors: courseAuthors.map((item) => item['id']),
			});
			notDisplayForm();
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
				<section>
					<Input
						id='courseTitle'
						labelText={courseTitleLabelText}
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
				<section>
					<label htmlFor='description'>{courseDescriptionLabelText}</label>
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
					<section>
						<h3>Add author</h3>
						<Input
							id='authorName'
							labelText={addAuthorLabelText}
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
						<h3>Authors</h3>
						{authorList}
					</section>
					<section>
						<h3>Duration</h3>
						<Input
							id='duration'
							labelText={courseDuratinLabelText}
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
					<section>
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
