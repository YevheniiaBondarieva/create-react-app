import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import { HeaderButtonLogoutText } from './../../constants';

import { HeaderCourses } from './Header.style';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { logout } from '../../store/user/actionCreators';
import { getUserName } from '../../store/selectors';

const Header = ({ isLoggedIn, handleLogout }) => {
	const navigate = useNavigate();
	const userName = useSelector(getUserName);
	const dispatch = useDispatch();
	return (
		<HeaderCourses>
			<nav className='pageNavigation'>
				<Link to='/'>
					<Logo />
				</Link>
				{isLoggedIn ? (
					<ul className='userInfo'>
						<li className='userName'>
							<a href='/' className='headerUserInfo'>
								{userName}
							</a>
						</li>
						<li className='logout'>
							<Button
								buttonType='button'
								className='header__button'
								buttonText={HeaderButtonLogoutText}
								onClick={() => {
									handleLogout();
									dispatch(logout());
									navigate('/login');
								}}
							/>
						</li>
					</ul>
				) : null}
			</nav>
		</HeaderCourses>
	);
};

Header.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	handleLogout: PropTypes.func.isRequired,
};

export default Header;
