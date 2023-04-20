import * as services from './../services';
import { DELETE_COURSE, SAVE_COURSE, UPDATE_COURSE } from './actionTypes';

export const removeCourse = (courseId) => async (dispatch) => {
	try {
		const response = await services.deleteCourse(courseId);
		if (response.successful) {
			dispatch({
				type: DELETE_COURSE,
				payload: courseId,
			});
		}
	} catch (error) {
		console.log(`Error deleting course: ${error}`);
	}
};

export const addCourse = (data) => async (dispatch) => {
	try {
		const response = await services.addCourse(data);
		dispatch({
			type: SAVE_COURSE,
			payload: response,
		});
	} catch (error) {
		console.log(`Error adding course: ${error}`);
	}
};

export const updateCourse = (courseId, data) => async (dispatch) => {
	try {
		const response = await services.updateCourse(courseId, data);
		dispatch({
			type: UPDATE_COURSE,
			payload: response,
		});
	} catch (error) {
		console.log(`Error updating course: ${error}`);
	}
};
