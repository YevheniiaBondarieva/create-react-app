import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import { HeaderButtonLogoutText } from './../../constants';

import styled from 'styled-components';

const HeaderCourses = styled.header`
	margin: 1rem;
	margin-bottom: 0px;
	padding: 1rem;
	border: 3px solid rgb(244, 106, 106);
	border-radius: 1px;
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		ul {
			list-style: none;
			display: flex;
			align-items: center;
			li {
				margin-right: 30px;
				&:last-child {
					margin-right: 0px;
				}
				.header__button {
					border: 2px solid rgb(191, 112, 243);
					width: 4.5rem;
					height: 1.7rem;
					color: black;
					background-color: white;
					font-size: 14px;
					font-weight: 400;
				}
			}
		}
	}
`;

const HeaderUserInfo = styled.a`
	text-decoration: none;
	color: black;
	font-weight: 600;
	font-size: 18px;
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
					<li>
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
