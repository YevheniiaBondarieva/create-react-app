import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { addCourseButtonText, roles } from './../../constants';
import { Main, EmptyContainer } from './Courses.style';

import { getCourses } from './../../store/courses/actionCreators';
import * as services from './../../store/services';
import * as selectors from '../../store/selectors';
import { getAuthors } from '../../store/authors/actionCreators';
import { getCurrentUser } from '../../store/user/thunk';
import { detachAuthors } from '../../store/authors/actionCreators';

const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const allCourses = useSelector(selectors.courses);
	const allAuthors = useSelector(selectors.authors);
	const role = useSelector(selectors.role);
	const [filteredCourses, setFilteredCourses] = useState(allCourses);

	const fetchCourses = async () => {
		const response = await services.courses();
		return response;
	};

	const fetchAuthors = async () => {
		const response = await services.authors();
		return response;
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getCurrentUser(token));
		}
		dispatch(detachAuthors());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (allCourses.length === 0) {
			fetchCourses().then((result) => dispatch(getCourses(result)));
		}
		if (allAuthors.length === 0) {
			fetchAuthors().then((result) => dispatch(getAuthors(result)));
		}
	}, [allAuthors.length, allCourses.length, dispatch]);

	const filterCourses = (searchValue) => {
		const courses =
			searchValue === ''
				? allCourses
				: allCourses.filter((item) => {
						return (
							item.id.toLowerCase().includes(searchValue) ||
							item.title.toLowerCase().includes(searchValue)
						);
				  });
		setFilteredCourses(courses);
	};

	const authorsObject = allAuthors.reduce((props, author) => {
		props[author.id] = author.name;
		return props;
	}, {});

	const courseItems = filteredCourses.map((item) => {
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
				{role === roles.admin ? (
					<Button
						buttonType='button'
						buttonText={addCourseButtonText}
						className='addCourseButton'
						onClick={() => navigate('/courses/add')}
					/>
				) : null}
			</section>
			{filteredCourses.length > 0 ? (
				courseItems
			) : (
				<EmptyContainer data-testid='emptyContainer'>
					No courses found
				</EmptyContainer>
			)}
		</Main>
	);
};

export default Courses;
