import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	aside {
		padding: 120px 80px;

		display: flex;
		flex: 7;
		flex-direction: column;
		justify-content: center;

		background: ${(props) => props.theme.colors.homePosterBackground};
		color: #fff;

		img {
			max-width: 320px;
		}

		strong {
			margin: 16px 0 0 0;

			font: 700 36px "Poppins", sans-serif;
			line-height: 42px;
		}

		p {
			margin: 16px 0 0 0;

			font-size: 24px;
			line-height: 32px;

			color: #f8f8f8;
		}
	}

	.themeSwitcherContent {
		width: 100%;
		padding: 32px;

		position: absolute;
		display: flex;
		justify-content: end;
	}

	main {
		padding: 0 32px;

		display: flex;
		flex: 8;
		align-items: center;
		justify-content: center;

		div {
			.SVGImage {
				width: 100%;
				.LogoImage {
					fill: ${(props) => props.theme.colors.letMeAskLogoText};
				}
			}
		}
	}

	.main-content {
		width: 100%;
		max-width: 320px;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		text-align: center;
		color: ${(props) => props.theme.colors.roomTitle};

		> img {
			align-self: center;
		}

		h2 {
			margin: 64px 0 24px;

			font-size: 24px;
			font-family: "Poppins", sans-serif;
		}

		form {
			input {
				height: 50px;
				padding: 0 16px;

				border: 1px solid ${(props) => props.theme.colors.textareaBorder};
				border-radius: 8px;
				background: ${(props) => props.theme.colors.textareaBackground};
				color: ${(props) => props.theme.colors.textareaColor};
			}

			button {
				margin-top: 16px;
			}

			button,
			input {
				width: 100%;
			}
		}

		p {
			margin-top: 16px;

			font-size: 14px;
			color: #737380;

			a {
				color: #e559f9;
			}
		}
	}

	.create-room {
		height: 50px;
		margin: 64px 0 0 0;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 0;
		border-radius: 8px;
		background: #ea4335;
		color: #fff;
		font-weight: 500;
		cursor: pointer;

		transition: filter 0.2s;

		img {
			margin-right: 8px;
		}

		&:hover {
			filter: brightness(0.9);
		}
	}

	.separator {
		margin: 32px 0;

		display: flex;
		align-items: center;

		font-size: 14px;
		color: #a8a8b3;

		&::before {
			height: 1px;
			margin-right: 16px;

			flex: 1;

			background: #a8a8b3;
			content: "";
		}

		&::after {
			height: 1px;
			margin-left: 16px;

			flex: 1;

			background: #a8a8b3;
			content: "";
		}
	}
`;
