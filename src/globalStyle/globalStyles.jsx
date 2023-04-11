import { createGlobalStyle } from 'styled-components';

import { colors, fontSizes, fontFace } from './globalVariables';

const GlobalStyle = createGlobalStyle`
:root {
    --middle-washed-orange-color: ${colors.middleWashedOrange};
    --middle-saturated-azure-color: ${colors.middleSaturatedAzure};
    --violet-flower-color: ${colors.violetFlower};
    --black-color: ${colors.black};
    --white-color: ${colors.white};
    --pyridium-orange-color: ${colors.pyridiumOrange};
    --orange-color:  ${colors.orange};
    --spring-green-color: ${colors.springGreen};
    --blue-ice-color: ${colors.blueIce};
    --picasso-blue-color: ${colors.picassoBlue};
    --16px-font-size: ${fontSizes.size16Px};
    --18px-font-size: ${fontSizes.size18Px};
    --24px-font-size: ${fontSizes.size26Px};
    --arial-font-face: ${fontFace.arial};
  }
  @font-face {
    font-family: 'Arial Regular';
    src: url('./../assets/ArialMT.eot');
    src: url('./../assets/ArialMT.eot?#iefix') format('embedded-opentype'),
    url('./../assets/ArialMT.woff') format('woff'),
    url('./../assets/ArialMT.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
  body {
    margin: 0;
    padding: 0;
  
  }
  header {
  margin: 1rem;
	margin-bottom: 0px;
	padding: 1rem;
	border: 3px solid var(--middle-washed-orange-color);
	border-radius: 1px;
  }
  main {
    margin: 1rem;
	margin-top: 0px;
	padding: 1rem;
	border: 3px solid var(--middle-saturated-azure-color);
	border-radius: 1px;
  }
  button {
  border: 2px solid var(--violet-flower-color);
	color: var(--black-color);
	background-color: var(--white-color);
	font-size: var(--16px-font-size);
	font-weight: 400;
  }
  input{
    border: 2px solid var( --pyridium-orange-color);
		color: var(--black-color);
		background-color: var(--white-color);
		font-size: var(--16px-font-size);
		font-weight: 500;
  }
  article{
  border: 3px solid var(--middle-saturated-azure-color);
	border-radius: 1px;
  margin: 1rem;
	padding: 1rem;
  }
`;

export default GlobalStyle;
