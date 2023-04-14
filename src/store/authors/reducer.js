import * as actions from './actionTypes';

const authorsInitialState = [];

const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case actions.ADD_AUTHOR:
			return [...state, action.payload];
		case actions.GET_AUTHORS:
			return action.payload;
		case actions.ATTACH_AUTHOR: {
			const author = state.find((item) => item.id === action.payload);
			if (!author) {
				return [...state];
			}
			author.isAttach = true;
			return [...state];
		}
		case actions.DETACH_AUTHOR: {
			const author = state.find((item) => item.id === action.payload);
			if (!author) {
				return [...state];
			}
			author.isAttach = undefined;
			return [...state];
		}
		case actions.DETACH_AUTHORS: {
			const updatedAuthors = state.map((author) => ({
				...author,
				isAttach: undefined,
			}));
			return updatedAuthors;
		}
		default:
			return state;
	}
};

export default authorsReducer;
