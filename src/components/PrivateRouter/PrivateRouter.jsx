import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { role } from '../../store/selectors';
import { roles } from '../../constants';

export const PrivateRoute = () => {
	const userRole = useSelector(role);
	if (userRole === roles.admin) {
		return <Outlet />;
	} else {
		return <Navigate to='/courses' replace />;
	}
};
