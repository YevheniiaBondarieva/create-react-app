import * as actions from './actionTypes';

export const loginSuccess = ({ token, name, email }) => ({
	type: actions.LOGIN_SUCCESS,
	payload: { token, name, email },
});

export const loginFailure = () => ({
	type: actions.LOGIN_FAILURE,
});

export const logout = () => ({
	type: actions.LOGOUT,
});
