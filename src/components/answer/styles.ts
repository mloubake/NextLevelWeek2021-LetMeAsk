import styled from "styled-components";

export const Container = styled.div`
	.answer {
		margin-top: 20px;

		display: flex;
		flex-direction: column;
		align-items: end;

		border-top: 1px solid red;

		> button {
			background: red;
		}
	}

	div {
		display: flex;
		flex-direction: column;

		textarea {
			min-width: 100%;
			max-width: 100%;
			padding: 10px;
			margin-top: 20px;

			background: ${(props) => props.theme.colors.questionAnswerBackground};
			border: 1px solid red;
			border-radius: 50%;
		}

		div {
			display: flex;
			flex-direction: row;
			justify-content: end;
		}
	}
`;
