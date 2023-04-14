import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../../../common';
import {
	searchPlaceholdetText,
	searchButtonText,
} from './../../../../constants';
import { Form } from './SearchBar.style';

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
				id='search'
				className='searchInput'
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

SearchBar.propTypes = {
	filterCourses: PropTypes.func.isRequired,
};

export default SearchBar;
