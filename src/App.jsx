import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import GlobalStyle from './globalStyle/globalStyles';

import { useState } from 'react';

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const token = localStorage.getItem('token');
	const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

	const handleLogin = (token) => {
		localStorage.setItem('token', token);
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<React.Fragment>
			<BrowserRouter>
				<GlobalStyle />
				<Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
				<Routes>
					<Route exact path='/registration' element={<Registration />} />
					<Route
						exact
						path='/login'
						element={<Login handleLogin={handleLogin} />}
					/>
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
					<Route
						exact
						path='/courses/add'
						element={isLoggedIn ? <CreateCourse /> : <Navigate to='/login' />}
					/>
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
