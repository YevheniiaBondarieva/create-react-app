import * as actions from './actionTypes';

export const getAuthors = (authors) => ({
	type: actions.GET_AUTHORS,
	payload: authors,
});

export const attachAuthor = (authorId) => ({
	type: actions.ATTACH_AUTHOR,
	payload: authorId,
});

export const detachAuthor = (authorId) => ({
	type: actions.DETACH_AUTHOR,
	payload: authorId,
});

export const detachAuthors = () => ({
	type: actions.DETACH_AUTHORS,
});
