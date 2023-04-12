import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

const authorsInitialState = []; // default value - empty array. After success getting authors from API - array of authors.

const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
			return [...state, action.payload];
		case GET_AUTHORS:
			return action.payload;
		default:
			return state;
	}
};

export default authorsReducer;
