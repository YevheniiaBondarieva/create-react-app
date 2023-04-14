import { ADD_AUTHOR } from './actionTypes';
import * as services from './../services';

export const addAuthor = (data) => async (dispatch) => {
	try {
		let response = await services.addAuthor(data);
		dispatch({
			type: ADD_AUTHOR,
			payload: response,
		});
	} catch (error) {
		console.log(`Error adding course:  ${error}`);
	}
};
