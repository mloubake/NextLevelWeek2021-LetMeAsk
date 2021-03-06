import styled from "styled-components";

export const Container = styled.div`
	header {
		padding: 24px;

		border-bottom: 1px solid
			${(props) => props.theme.colors.roomHeaderBottomBorder};

		.content {
			max-width: 1024px;
			margin: 0 auto;

			display: flex;
			justify-content: space-between;
			align-items: center;

			a {
				> img {
					max-height: 45px;
				}
			}

			> div {
				display: flex;
				gap: 16px;

				button {
					height: 40px;
				}
			}

			.themeSwitcher {
				transform: translateX(10vw);
			}
		}

		.SVGImage {
			max-height: 45px;
			.LogoImage {
				fill: ${(props) => props.theme.colors.letMeAskLogoText};
			}
		}
	}

	main {
		max-width: 800px;
		margin: 0 auto;

		.room-title {
			margin: 32px 0 24px;

			display: flex;
			align-items: center;

			h1 {
				font-family: "Poppins", sans-serif;
				font-size: 24px;
				color: ${(props) => props.theme.colors.roomTitle};
			}

			span {
				margin-left: 16px;
				padding: 8px 16px;

				background: ${(props) => props.theme.colors.questionCounterBackground};
				border-radius: 25px;
				color: ${(props) => props.theme.colors.questionCounterText};
				font-weight: 500;
				font-size: 14px;
			}
		}

		form {
			textarea {
				width: 100%;
				padding: 16px;
				min-height: 130px;

				border: 0;
				border-radius: 8px;
				background: ${(props) => props.theme.colors.questionAnswerBackground};
				color: ${(props) => props.theme.colors.textareaColor};
				box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
				resize: vertical;
			}

			.form-footer {
				margin-top: 16px;

				display: flex;
				justify-content: space-between;
				align-items: center;

				.user-info {
					display: flex;
					align-items: center;

					img {
						width: 32px;
						height: 32px;

						border-radius: 50%;
					}

					> span {
						margin-left: 8px;

						color: #29292e;
						font-weight: 500;
						font-size: 14px;
					}
				}

				span {
					font-size: 14px;
					color: #737380;
					font-weight: 500;

					button {
						background: transparent;
						border: 0;
						color: #835afd;
						text-decoration: underline;
						font-size: 14px;
						font-weight: 500;
						cursor: pointer;
					}
				}
			}
		}

		.question-list {
			margin: 32px 0;
		}
	}

	.question-answer-content {
		display: flex;
		flex-direction: column;
		color: ${(props) => props.theme.colors.questionBolderText};

		.user-info {
			.admin-control-button-div {
				justify-content: end;
			}

			span {
				display: flex;
				align-items: center;
			}
		}
	}

	.lightbulb {
		width: 24px;
		height: 24px;
		color: #737380;

		&.lightOn {
			color: ${(props) => props.theme.colors.questionIconHighlighted};
		}
	}
`;
