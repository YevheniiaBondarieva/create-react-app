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
		border: 2px solid rgb(232, 187, 10);
		height: 1.7rem;
		color: black;
		background-color: white;
		font-size: 16px;
		font-weight: 500;
		margin-left: 1rem;
	}
	.searchButton {
		border: 2px solid rgb(191, 112, 243);
		width: 7rem;
		height: 2rem;
		color: black;
		background-color: white;
		font-size: 16px;
		font-weight: 500;
		margin-left: 1rem;
	}
`;

const SearchBar = ({ filterCourses }) => {
	const [searchValue, setSearchValue] = useState('');

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
