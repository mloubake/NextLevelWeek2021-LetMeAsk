import styled from "styled-components";

export const Container = styled.div`
	width: 20vw;
	height: 100vh;

	display: flex;
	flex-direction: column;

	position: fixed;
	top: 0;
	right: -20vw;

	border: 6px solid #835afc;
	border-radius: 8px;
	background: #f8f8f8;
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

		border: 3px solid #835afc;
		border-radius: 50%;
		cursor: pointer;
		transition: transform 0.5s ease-out;
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
		background: #f8f8f8;

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
			justify-content: center;
			align-items: center;
		}
	}
`;
