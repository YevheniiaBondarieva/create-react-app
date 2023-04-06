import { Button } from '../../common';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import {
	mockedCoursesList,
	mockedAuthorsList,
	addCourseButtonText,
} from './../../constants';

import styled from 'styled-components';

import { useState } from 'react';

const Main = styled.main`
	margin: 1rem;
	margin-top: 0px;
	padding: 1rem;
	border: 3px solid rgb(6, 175, 247);
	border-radius: 1px;
	section.coursesSection {
		display: flex;
		justify-content: space-between;
	}
	.addCourseButton {
		margin-right: 1rem;
		border: 2px solid rgb(191, 112, 243);
		width: 12rem;
		height: 2rem;
		color: black;
		background-color: white;
		font-size: 16px;
		font-weight: 500;
	}
`;

const Courses = ({ displayForm }) => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const filterCourses = (searchValue) =>
		setCourses(
			searchValue === ''
				? mockedCoursesList
				: mockedCoursesList.filter((item) => {
						const regex = new RegExp(searchValue, 'i');
						return regex.test(item.id) || regex.test(item.title);
				  })
		);

	const courseItems = courses.map((item) => {
		const { id, authors, ...itemProps } = item;
		const courseAuthors = [];
		authors.forEach((authorId) => {
			const filtered = mockedAuthorsList.find(
				(author) => author.id === authorId
			);
			courseAuthors.push(filtered.name);
		});
		return (
			<CourseCard
				key={id}
				courseAuthors={courseAuthors.toString().split(',').join(', ')}
				{...itemProps}
			/>
		);
	});

	return (
		<Main>
			<section className='coursesSection'>
				<SearchBar filterCourses={filterCourses} />
				<Button
					buttonType='button'
					buttonText={addCourseButtonText}
					className='addCourseButton'
					onClick={displayForm}
				/>
			</section>
			{courseItems}
		</Main>
	);
};

export default Courses;
