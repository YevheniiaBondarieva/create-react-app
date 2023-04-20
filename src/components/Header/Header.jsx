import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './components/Logo/Logo';
import { Button } from '../../common';
import { HeaderButtonLogoutText } from './../../constants';
import { HeaderCourses } from './Header.style';

import { logout } from '../../store/user/actionCreators';
import { getUserName } from '../../store/selectors';
import * as services from '../../store/services';

const Header = () => {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const userName = useSelector(getUserName);
	const dispatch = useDispatch();
	return (
		<HeaderCourses>
			<nav className='pageNavigation'>
				<Link to='/'>
					<Logo />
				</Link>
				{token ? (
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
								onClick={async () => {
									await services.logout(token.toString());
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

export default Header;
