import * as actions from './actionTypes';
import * as services from './../services';

export const getCurrentUser = (token) => async (dispatch) => {
	try {
		const response = await services.getCurrentUser(token);
		dispatch({
			type: actions.GET_CURRENT_USER_SUCCESS,
			payload: response,
		});
	} catch (error) {
		console.error('Error getting current user:', error);
	}
};
