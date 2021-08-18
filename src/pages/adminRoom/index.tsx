import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import cn from "classnames";

import { useRoom } from "../../hooks/useRoom";

import { Button } from "../../components/button/index";
import { RoomCode } from "../../components/roomCode/index";
import { Question } from "../../components/question/index";
import { Answer } from "../../components/answer";
import QuestionHistoryBar from "../../components/questionHistoryBar";

import { database } from "../../services/firebase";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as LightBulbOff } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as LightBulbOn } from "@fortawesome/free-solid-svg-icons";

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	// const { user } = UseAuth();
	const [highlightQuestion, setHighlightQuestion] = useState(false);
	const [lightBulb, setLightBulb] = useState(false);

	const params = useParams<RoomParams>();
	const history = useHistory();

	const roomId = params.id;

	const { title, questions } = useRoom(roomId);

	async function handleEndRoom() {
		await database.ref(`rooms/${roomId}`).update({ endedAt: new Date() });

		history.push("/");
	}

	async function handleMarkQuestionAsAnswered(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true,
			isAnswering: false,
		});
	}

	async function handleAnsweringQuestion(
		questionId: string,
		questionIsAnswering: boolean
	) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswering: !questionIsAnswering,
		});
	}

	async function handleHighlightQuestion(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: !highlightQuestion,
		});

		setHighlightQuestion(!highlightQuestion);
		setLightBulb(!lightBulb);
	}

	async function handleDeleteQuestion(questionId: string) {
		if (window.confirm("Tem certeza que deseja deletar essa pergunta?")) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	return (
		<Container id="page-room">
			<header>
				<div className="content">
					<Link to="/">
						<img src={logoImg} alt="LetMeAsk" />
					</Link>
					<div>
						<RoomCode code={roomId} />
						<Button isOutlined={true} onClick={handleEndRoom}>
							Encerrar sala
						</Button>
					</div>
				</div>
			</header>
			<div>
				<main>
					<div className="room-title">
						<h1>Sala {title}</h1>
						{questions.length > 0 ? (
							<span>{questions.length} pergunta(s)</span>
						) : (
							<span>Sem perguntas</span>
						)}
					</div>

					<div className="question-list" style={{ width: "100%" }}>
						{questions.map((question) => {
							return (
								<Question
									key={question.id}
									content={question.content}
									isAnswered={question.isAnswered}
									isHighlighted={question.isHighlighted}
								>
									<div className={"question-answer-content"}>
										<div className="user-info">
											<div>
												<img
													src={question.author.avatar}
													alt={question.author.name}
												/>
												<span>{question.author.name}</span>
											</div>
											{!question.isAnswered && (
												<>
													<div className="admin-control-button-div">
														<button
															className="question-button"
															type="button"
															onClick={() =>
																handleMarkQuestionAsAnswered(question.id)
															}
														>
															<img
																src={checkImg}
																alt="Marcar pergunta como respondida"
															/>
														</button>
														<button
															className="question-button"
															type="button"
															onClick={() =>
																handleAnsweringQuestion(
																	question.id,
																	question.isAnswering
																)
															}
														>
															<img src={answerImg} alt="Responder pergunta" />
														</button>
														<button
															className="question-button"
															type="button"
															onClick={() =>
																handleHighlightQuestion(question.id)
															}
														>
															<FontAwesomeIcon
																icon={
																	question.isHighlighted
																		? LightBulbOn
																		: LightBulbOff
																}
																className={cn("lightbulb", {
																	lightOn: question.isHighlighted,
																})}
															/>
														</button>
														<button
															className="question-button"
															type="button"
															onClick={() => handleDeleteQuestion(question.id)}
														>
															<img src={deleteImg} alt="Remover pergunta" />
														</button>
													</div>
												</>
											)}
										</div>
										<Answer
											isAnswering={question.isAnswering}
											isAnswered={question.isAnswered}
											questionId={question.id}
											answerContent={question.answer}
										/>
									</div>
								</Question>
							);
						})}
					</div>
				</main>
				<QuestionHistoryBar />
			</div>
		</Container>
	);
}
