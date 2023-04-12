import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export const addAuthor = (author) => ({
	type: ADD_AUTHOR,
	payload: author,
});

export const getAuthors = (authors) => ({
	type: GET_AUTHORS,
	payload: authors,
});
