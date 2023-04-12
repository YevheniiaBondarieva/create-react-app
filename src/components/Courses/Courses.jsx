import { Button } from '../../common';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import {
	mockedCoursesList,
	mockedAuthorsList,
	addCourseButtonText,
} from './../../constants';

import { useState } from 'react';

import { Main } from './Courses.style';

import { Link } from 'react-router-dom';

const Courses = () => {
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
				id={id}
				courseAuthors={courseAuthors.join(', ')}
				{...itemProps}
			/>
		);
	});

	return (
		<Main>
			<section className='coursesSection'>
				<SearchBar filterCourses={filterCourses} />
				<Link to='/courses/add'>
					<Button
						buttonType='button'
						buttonText={addCourseButtonText}
						className='addCourseButton'
					/>
				</Link>
			</section>
			{courseItems}
		</Main>
	);
};

export default Courses;
