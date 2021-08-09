import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { UseAuth } from "../../hooks/useAuth";

import { database } from "../../services/firebase";

import illustration from "../../assets/images/illustration.svg";
import logo from "../../assets/images/logo.svg";
import googleIcon from "../../assets/images/google-icon.svg";

import { Button } from "../../components/button";

import { Container } from "./styles";

export function Home() {
	const history = useHistory();
	const { signInWithGoogle, user } = UseAuth();
	const [roomCode, setRoomCode] = useState("");

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}
		history.push("/rooms/new");
	}

	async function handleJoinRoom(event: FormEvent) {
		event.preventDefault();

		if (roomCode.trim() === "") {
			return;
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert("Room does not exist.");
			return;
		}

		if (roomRef.val().endedAt) {
			alert("Room already closed");
			return;
		}

		history.push(`/rooms/${roomCode}`);
	}

	return (
		<Container id="page-auth">
			<aside>
				<img src={illustration} alt="Illustration" />
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logo} alt="LetMeAsk" />
					<button className="create-room" onClick={handleCreateRoom}>
						<img src={googleIcon} alt="GoogleIcon" />
						Crie a sua sala com o Google
					</button>
					<div className="separator">Ou entre em uma sala</div>
					<form onSubmit={handleJoinRoom}>
						<input
							type="text"
							placeholder="Digite o código da sala"
							onChange={(event) => setRoomCode(event.target.value)}
							value={roomCode}
						/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</Container>
	);
}