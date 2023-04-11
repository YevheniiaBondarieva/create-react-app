import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import { HeaderButtonLogoutText } from './../../constants';

import { HeaderCourses } from './Header.style';

import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const Header = ({ isLoggedIn, userName, handleLogout }) => {
	const navigate = useNavigate();
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
	userName: PropTypes.string,
	handleLogout: PropTypes.func.isRequired,
};

export default Header;
