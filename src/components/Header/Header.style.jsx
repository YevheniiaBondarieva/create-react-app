import styled from 'styled-components';

export const HeaderCourses = styled.header`
	nav.pageNavigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	ul.userInfo {
		list-style: none;
		display: flex;
		align-items: center;
	}
	li.userName {
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

export const HeaderUserInfo = styled.a`
	text-decoration: none;
	color: var(--font-color);
	font-weight: 600;
	font-size: var(--username-link-font-size);
`;
