import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: column;

	background: #fefefe;
	border-radius: 8px;
	box-shadow: 0 12px 12px rgba(0, 0, 0, 0.04);

	& + .question {
		margin-top: 8px;
	}

	&.highlighted {
		background: #f4f0ff;
		border: 3px solid #835afd;

		footer .user-info span {
			color: #29292e;
		}
	}

	&.answered {
		background: #dbdcdd;
	}

	p {
		color: #29292e;
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

			color: #737380;
			font-size: 14px;
		}
	}

	div {
		display: flex;
		gap: 16px;
		width: 100%;
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

			color: #737380;
			gap: 8px;

			&.liked {
				color: #835afd;

				svg path {
					stroke: #835afd;
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
