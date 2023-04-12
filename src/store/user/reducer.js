import * as actions from './actionTypes';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: '', // default value - empty string. After success login - name of user
	email: '', // default value - empty string. After success login - email of user
	token: localStorage.getItem('token') || '', // default value - empty string or token value from localStorage.
	// After success login - value from API /login response. See Swagger.
};

export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case actions.LOGIN_FAILURE:
			return { ...state, isAuth: false, name: '', email: '', token: '' };
		case actions.LOGOUT:
			localStorage.clear();
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
}
