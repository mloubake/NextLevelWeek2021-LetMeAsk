import { useHistory } from "react-router-dom";

import { firebase, auth } from "../services/firebase";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
	const history = useHistory();

	function handleCreateRoom() {
		const provider = new firebase.auth.GoogleAuthProvider();

		auth.signInWithPopup(provider)
			.then((result) => {
				console.log(result);

				history.push("/rooms/new");
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				console.log(errorCode);
				alert(errorCode);

				var errorMessage = error.message;
				console.log(errorMessage);
				alert(errorMessage);
			});
	}

	return (
		<div id="page-auth">
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
					<form>
						<input
							type="text"
							placeholder="Digite o código da sala"
						/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</div>
	);
}
