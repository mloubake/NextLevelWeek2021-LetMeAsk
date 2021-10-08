import styled from "styled-components";

export const Container = styled.button`
	height: 50px;
	padding: 0 32px;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 0;
	border-radius: 8px;
	background: ${(props) => props.theme.colors.buttonBackground};
	color: ${(props) => props.theme.colors.buttonBackgroundText};
	font-weight: 500;
	cursor: pointer;

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&.outlined {
		background: ${(props) => props.theme.colors.outlinedButtonBackground};
		border: 1px solid ${(props) => props.theme.colors.outlinedButtonBorder};
		color: ${(props) => props.theme.colors.outlinedButtonText};
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
