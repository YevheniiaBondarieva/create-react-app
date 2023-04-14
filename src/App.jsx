import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import GlobalStyle from './globalStyle/globalStyles';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';

function App() {
	const token = localStorage.getItem('token');
	const isLoggedIn = token ? true : false;

	return (
		<React.Fragment>
			<BrowserRouter>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route exact path='/registration' element={<Registration />} />
					<Route exact path='/login' element={<Login />} />
					<Route
						exact
						path='/'
						element={isLoggedIn ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route
						exact
						path='/courses'
						element={isLoggedIn ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route element={<PrivateRoute />}>
						<Route
							exact
							path='/courses/add'
							element={isLoggedIn ? <CourseForm /> : <Navigate to='/login' />}
						/>
						<Route
							path='/courses/update/:courseId'
							element={isLoggedIn ? <CourseForm /> : <Navigate to='/login' />}
						/>
					</Route>
					<Route
						path='/courses/:courseId'
						element={isLoggedIn ? <CourseInfo /> : <Navigate to='/login' />}
					/>
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}
export default App;
