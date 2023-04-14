import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --header-color: rgb(244, 106, 106);
    --main-color: rgb(6, 175, 247);
    --border-button-color: rgb(191, 112, 243);
    --font-color: black;
    --bg-color: white;
    --border-input-color: rgb(232, 187, 10);
    --textarea-border-color:  rgb(232, 232, 10);
    --course-border-color: rgb(6, 197, 143);
    --primary-font-size: 16px;
    --username-link-font-size: 18px;
    --heading-font-size: 26px;
  }
  @font-face {
    font-family: 'Arial Regular';
    src: url('assets/ArialMT.eot');
    src: url('assets/ArialMT.eot?#iefix') format('embedded-opentype'),
    url('assets/ArialMT.woff') format('woff'),
    url('assets/ArialMT.ttf') format('truetype');
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
