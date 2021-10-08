import styled from "styled-components";

export const Container = styled.button`
	height: 40px;

	display: flex;

	border-radius: 8px;
	overflow: hidden;
	background: ${(props) => props.theme.colors.roomCodeBackground};
	color: ${(props) => props.theme.colors.roomCodeText};
	border: 1px solid ${(props) => props.theme.colors.roomCodeBorder};
	cursor: pointer;

	div {
		padding: 0 12px;

		display: flex;
		justify-content: center;
		align-items: center;

		background: ${(props) => props.theme.colors.roomCodeIconBackground};
	}

	span {
		width: 230px;
		padding: 0 16px 0 12px;

		display: block;
		align-self: center;
		flex: 1;

		font-size: 14px;
		font-weight: 500;
	}
`;
