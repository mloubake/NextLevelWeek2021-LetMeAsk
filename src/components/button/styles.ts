import styled from "styled-components";

type ContainerProps = {
	backgroundColor?: string;
};

export const Container = styled.button<ContainerProps>`
	height: 50px;
	padding: 0 32px;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 0;
	border-radius: 8px;
	background: #835afd;
	color: #fff;
	font-weight: 500;
	cursor: pointer;

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&.outlined {
		background: #fff;
		border: 1px solid #835afd;
		color: #835afd;
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;