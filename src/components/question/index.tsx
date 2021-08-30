import React, { ReactNode } from "react";
import cn from "classnames";

import { Container } from "./styles";

type QuestionProps = {
	content: string;
	children?: ReactNode;
	isAnswered?: boolean;
	isAnswering?: boolean;
	isHighlighted?: boolean;
	ref?: any;
};

export const Question = React.forwardRef(
	(
		{ content, isAnswered, isHighlighted, children }: QuestionProps,
		ref: any
	) => {
		return (
			<Container
				ref={ref}
				className={cn(
					"question",
					{ answered: isAnswered },
					{ highlighted: isHighlighted }
				)}
			>
				<p>{content}</p>
				<footer>
					<div>{children}</div>
				</footer>
			</Container>
		);
	}
);
