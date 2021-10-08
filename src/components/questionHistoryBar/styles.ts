import styled from "styled-components";

export const Container = styled.div`
	width: 20vw;
	height: 100vh;

	display: flex;
	flex-direction: column;

	position: fixed;
	top: 0;
	right: -20vw;

	border: 6px solid ${(props) => props.theme.colors.roomCodeBorder};
	border-radius: 8px;
	background: ${(props) => props.theme.colors.questionBackground};
	transition: transform 0.3s ease-out;

	&.open {
		transform: translateX(-20vw);
	}

	.toggle-history-bar {
		width: 3vw;
		height: 3vw;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 50%;
		right: 20vw;

		background: ${(props) =>
			props.theme.colors.historyBarToogleButtonBackground};
		border: 3px solid
			${(props) => props.theme.colors.historyBarToogleButtonBorder};
		color: ${(props) => props.theme.colors.historyBarToogleButtonBorder};
		border-radius: 50%;
		cursor: pointer;
		transition: transform 0.4s ease-out;
		transform: rotateZ(0deg);

		&.open {
			transform: rotateZ(180deg);
		}
	}

	.history-bar {
		height: 100%;

		display: flex;
		flex-direction: column;

		overflow-y: auto;
		background: ${(props) => props.theme.colors.roomBackground};

		button {
			margin: 1vh;

			background: transparent;
			border: transparent;
			cursor: pointer;
		}

		.question {
			height: 2vh;

			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
		}
	}
`;
