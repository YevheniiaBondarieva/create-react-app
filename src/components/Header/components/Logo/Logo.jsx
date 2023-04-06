import logoImage from './../../../../assets/logo.jpeg';

import styled from 'styled-components';

const LogoImg = styled.img`
	max-width: 10rem;
	max-height: 3rem;
`;

const Logo = () => {
	return <LogoImg src={logoImage} alt='Logo' />;
};

export default Logo;
