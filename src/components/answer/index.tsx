import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import { Button } from "../button/index";

import { database } from "../../services/firebase";

import { Container } from "./styles";

type AnswerProps = {
	isAnswering: boolean;
	isAnswered: boolean;
	questionId: string;
	answerContent: string;
};

type RoomParams = {
	id: string;
};

export function Answer({
	questionId,
	answerContent,
	isAnswering,
	isAnswered,
}: AnswerProps) {
	const [answerQuestion, setAnswerQuestion] = useState("");

	const params = useParams<RoomParams>();
	const roomId = params.id;

	async function handleSubmitAnswer(event: FormEvent) {
		event.preventDefault();

		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			answer: answerQuestion,
		});
	}

	return (
		<>
			{answerContent ? (
				<section style={{ marginTop: "24px" }}>
					Resposta: {answerContent}
				</section>
			) : (
				""
			)}
			{isAnswering ? (
				<form onSubmit={handleSubmitAnswer}>
					<Container className={cn("answer", { answer: isAnswered })}>
						<div>
							<textarea
								placeholder="Qual a sua resposta?"
								onChange={(event) => setAnswerQuestion(event.target.value)}
							></textarea>
							<div>
								<Button>Responder</Button>
							</div>
						</div>
					</Container>
				</form>
			) : (
				""
			)}
		</>
	);
}
