import { Button, Input } from '../../../../common';

import {
	searchPlaceholdetText,
	searchButtonText,
} from './../../../../constants';

import styled from 'styled-components';

import { useState, useEffect } from 'react';

const Form = styled.form`
	display: flex;
	flex-basis: 60%;
	#searchInput {
		flex-basis: 90%;
		height: 1.7rem;
		margin-left: 1rem;
	}
	.searchButton {
		width: 7rem;
		height: 2rem;
		margin-left: 1rem;
	}
`;

const SearchBar = ({ filterCourses }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			filterCourses(searchValue);
		}
	};

	useEffect(() => {
		if (searchValue === '') {
			filterCourses('');
		}
	}, [searchValue, filterCourses]);

	return (
		<Form>
			<Input
				type='text'
				id='searchInput'
				placeholdetText={searchPlaceholdetText}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<Button
				buttonType='button'
				className='searchButton'
				buttonText={searchButtonText}
				onClick={() => filterCourses(searchValue)}
			/>
		</Form>
	);
};

export default SearchBar;
