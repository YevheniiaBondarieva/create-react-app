import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

//////////////////////////////////////////////////////////////////////////////
// const store = {
// 	user: {
// 		isAuth: boolean, // default value - false. After success login - true
// 		name: string, // default value - empty string. After success login - name of user
// 		email: string, // default value - empty string. After success login - email of user
// 		token: string, // default value - empty string or token value from localStorage. After success login - value from API /login response. SeeSwagger.
// 	},
// 	courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response. See Swagger.
// 	authors: [], // list of authors. Default value - empty array. After success getting authors - value from API /authors/all response. See Swagger.
// };
