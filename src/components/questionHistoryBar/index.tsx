import { useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import { useRoom } from "../../hooks/useRoom";

import { Question } from "../../components/question/index";

import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type RoomParams = {
	id: string;
};

function QuestionHistoryBar() {
	const [openQuestionHistoryBar, setOpenQuestionHistoryBar] = useState(false);
	const params = useParams<RoomParams>();

	const roomId = params.id;

	const { questions } = useRoom(roomId);

	function toggleHistoryBar() {
		setOpenQuestionHistoryBar(!openQuestionHistoryBar);
	}

	return (
		<Container className={cn({ open: openQuestionHistoryBar })}>
			<div>
				<button
					className={cn("toggle-history-bar", { open: openQuestionHistoryBar })}
					onClick={toggleHistoryBar}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
			</div>
			<div className="history-bar">
				{questions.map((question) => {
					return (
						<button>
							<Question
								key={question.id}
								content={question.content}
								isAnswered={question.isAnswered}
								isHighlighted={question.isHighlighted}
							/>
						</button>
					);
				})}
			</div>
		</Container>
	);
}

export default QuestionHistoryBar;
