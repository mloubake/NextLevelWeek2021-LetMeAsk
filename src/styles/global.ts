import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
	padding: 0;
	margin: 0;

	box-sizing: border-box;
}

body {
	background: ${(props) => props.theme.colors.roomBackground};
	color: ${(props) => props.theme.colors.questionBolderText};
}

body,
input,
button,
textarea {
	font: 400 16px "Roboto", sans-serif;
}

`;
