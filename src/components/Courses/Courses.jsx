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
	section.coursesSection {
		display: flex;
		justify-content: space-between;
	}
	.addCourseButton {
		margin-right: 1rem;
		width: 12rem;
		height: 2rem;
	}
`;

const Courses = ({ displayForm }) => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const authorsObject = mockedAuthorsList.reduce((props, author) => {
		props[author.id] = author.name;
		return props;
	}, {});

	const filterCourses = (searchValue) => {
		const filteredCourses =
			searchValue === ''
				? mockedCoursesList
				: mockedCoursesList.filter((item) => {
						return (
							item.id.toLowerCase().includes(searchValue) ||
							item.title.toLowerCase().includes(searchValue)
						);
				  });
		setCourses(filteredCourses);
	};

	const courseItems = courses.map((item) => {
		const { id, authors, ...itemProps } = item;
		const courseAuthors = authors.map((authorId) => authorsObject[authorId]);
		return (
			<CourseCard
				key={id}
				courseAuthors={courseAuthors.join(', ')}
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
