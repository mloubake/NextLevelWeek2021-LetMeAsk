import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { UseAuth } from "./useAuth";

type QuestionType = {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	content: string;
	isAnswered: boolean;
	isAnswering: boolean;
	isHighlighted: boolean;
	likeCount: number;
	likeId: string | undefined;
	answer: string;
};

type FirebaseQuestions = Record<
	string,
	{
		author: {
			name: string;
			avatar: string;
		};
		content: string;
		isAnswered: boolean;
		isAnswering: boolean;
		isHighlighted: boolean;
		likes: Record<string, { authorId: string }>;
		answer: string;
	}
>;

export function useRoom(roomId: string) {
	const { user } = UseAuth();
	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [title, setTitle] = useState("");

	useEffect(() => {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on("value", (room) => {
			const databaseRoom = room.val();
			const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

			const parsedQuestions = Object.entries(firebaseQuestions).map(
				([key, value]) => {
					return {
						id: key,
						content: value.content,
						author: value.author,
						isHighlighted: value.isHighlighted,
						isAnswered: value.isAnswered,
						isAnswering: value.isAnswering,
						likeCount: Object.values(value.likes ?? {}).length,
						likeId: Object.entries(value.likes ?? {}).find(
							([key, like]) => like.authorId === user?.id
						)?.[0],
						answer: value.answer,
					};
				}
			);

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		});

		return () => {
			roomRef.off("value");
		};
	}, [roomId, user?.id]);

	return { questions, title };
}
