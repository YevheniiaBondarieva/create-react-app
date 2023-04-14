import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { role } from '../../store/selectors';

export const PrivateRoute = () => {
	const userRole = useSelector(role);
	console.log(userRole);
	if (userRole === 'admin') {
		return <Outlet />;
	} else {
		return <Navigate to='/courses' replace />;
	}
};
