import { GET_COURSES } from './actionTypes';

export const getCourses = (courses) => ({
	type: GET_COURSES,
	payload: courses,
});
