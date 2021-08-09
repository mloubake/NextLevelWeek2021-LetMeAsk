import { ReactNode } from "react";
import cn from "classnames";

import { Container } from "./styles";

type QuestionProps = {
	content: string;
	children?: ReactNode;
	isAnswered?: boolean;
	isAnswering?: boolean;
	isHighlighted?: boolean;
};

export function Question({
	content,
	isAnswered,
	isHighlighted,
	children,
}: QuestionProps) {
	return (
		<Container
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
