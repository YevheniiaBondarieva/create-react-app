import {
	SAVE_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
	GET_COURSES,
} from './actionTypes';

export const addCourse = (course) => ({
	type: SAVE_COURSE,
	payload: course,
});

export const deleteCourse = (courseId) => ({
	type: DELETE_COURSE,
	payload: courseId,
});

export const updateCourse = (course) => ({
	type: UPDATE_COURSE,
	payload: course,
});

export const getCourses = (courses) => ({
	type: GET_COURSES,
	payload: courses,
});
