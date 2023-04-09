import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import { HeaderButtonLogoutText } from './../../constants';

import styled from 'styled-components';

const HeaderCourses = styled.header`
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	ul {
		list-style: none;
		display: flex;
		align-items: center;
	}
	li {
		margin-right: 30px;
	}
	.logout {
		margin-right: 0px;
	}
	.header__button {
		width: 5rem;
		height: 1.7rem;
	}
`;

const HeaderUserInfo = styled.a`
	text-decoration: none;
	color: var(--font-color);
	font-weight: 600;
	font-size: var(--username-link-font-size);
`;

const Header = () => {
	return (
		<HeaderCourses>
			<nav>
				<a href='/'>
					<Logo />
				</a>
				<ul>
					<li>
						<HeaderUserInfo href='/'>Dave</HeaderUserInfo>
					</li>
					<li className='logout'>
						<a href='/logout'>
							<Button
								buttonType='button'
								className='header__button'
								buttonText={HeaderButtonLogoutText}
							/>
						</a>
					</li>
				</ul>
			</nav>
		</HeaderCourses>
	);
};

export default Header;
