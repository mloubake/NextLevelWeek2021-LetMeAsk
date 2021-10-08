import styled from "styled-components";

export const Container = styled.div`
	width: 40px;
	height: 40px;
	padding: 3px;

	display: flex;
	justify-content: center;
	align-items: center;

	background: black;
	border: 3px solid #835afd;
	border-radius: 50%;
	cursor: pointer;
`;

export const Flipper = styled.div`
	width: calc(100%);
	height: calc(100%);

	padding: 1px;

	display: flex;
	justify-content: center;
	align-items: center;

	background: ${(props) => props.theme.colors.roomBackground};
	border-radius: 50%;

	.sun {
		color: #835afd;
		border-radius: 50%;
	}

	.moon {
		color: yellow;
		border-radius: 50%;
	}
`;
