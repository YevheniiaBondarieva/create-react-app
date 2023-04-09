import { createGlobalStyle } from 'styled-components';

import { colors, fontSizes } from './globalVariables';

const GlobalStyle = createGlobalStyle`
:root {
    --header-color: ${colors.header};
    --main-color: ${colors.main};
    --border-button-color: ${colors.borderButton};
    --font-color: ${colors.font};
    --bg-color: ${colors.background};
    --border-input-color: ${colors.borderInput};
    --textarea-border-color:  ${colors.textareaBorder};
    --course-border-color: ${colors.courseBorder};
    --primary-font-size: ${fontSizes.primary};
    --username-link-font-size: ${fontSizes.usernameLink};
    --heading-font-size: ${fontSizes.heading};
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
	border: 3px solid var(--header-color);
	border-radius: 1px;
  }
  main {
    margin: 1rem;
	margin-top: 0px;
	padding: 1rem;
	border: 3px solid var(--main-color);
	border-radius: 1px;
  }
  button {
  border: 2px solid var(--border-button-color);
	color: var(--font-color);
	background-color: var(--bg-color);
	font-size: var(--primary-font-size);
	font-weight: 400;
  }
  input{
    border: 2px solid var(--border-input-color);
		color: var(--font-color);
		background-color: var(--bg-color);
		font-size: var(--primary-font-size);
		font-weight: 500;
  }
`;

export default GlobalStyle;
