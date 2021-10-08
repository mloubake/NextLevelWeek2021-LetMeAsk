import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: column;

	background: ${(props) => props.theme.colors.questionBackground};
	border-radius: 8px;
	box-shadow: 0 12px 12px rgba(0, 0, 0, 0.04);

	& + .question {
		margin-top: 8px;
	}

	&.highlighted {
		background: ${(props) => props.theme.colors.questionHighlightedBackground};
		border: 3px solid ${(props) => props.theme.colors.questionHighlightedBorder};

		footer .user-info span {
			color: ${(props) => props.theme.colors.questionBolderText};
		}
	}

	&.answered {
		background: ${(props) => props.theme.colors.questionAnswerBackground};
	}

	p {
		color: ${(props) => props.theme.colors.questionBolderText};
	}

	footer {
		margin-top: 24px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.user-info {
		display: flex;
		align-items: center;

		img {
			width: 24px;
			height: 24px;

			border-radius: 50%;
		}

		span {
			margin-left: 8px;

			color: ${(props) => props.theme.colors.questionBoldText};
			font-size: 14px;
		}
	}

	div {
		width: 100%;

		display: flex;
		gap: 16px;

		color: ${(props) => props.theme.colors.questionBolderText};
	}

	.question-button {
		background: transparent;
	}

	button {
		border: 0;

		cursor: pointer;
		transition: filter 0.2s;

		&.like-button {
			display: flex;
			align-items: flex-end;
			justify-content: end;

			color: ${(props) => props.theme.colors.questionIcon};
			gap: 8px;

			&.liked {
				color: ${(props) => props.theme.colors.questionIconHighlighted};

				svg path {
					stroke: ${(props) => props.theme.colors.questionIconHighlighted};
				}
			}
		}

		&:hover {
			filter: brightness(0.8);
		}
	}

	footer {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: end;
	}
`;
