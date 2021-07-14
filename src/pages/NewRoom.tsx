import { useContext } from "react";
import { Link } from "react-router-dom";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import { AuthContext } from "../App";

import "../styles/auth.scss";

export function NewRoom() {
	const { user } = useContext(AuthContext);

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
					<h1>{user?.name}</h1>
					<h2>Criar uma nova sala</h2>
					<form>
						<input type="text" placeholder="Nome da sala" />
						<Button type="submit">Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente?
						<Link to="/">Clique Aqui</Link>
					</p>
				</div>
			</main>
		</div>
	);
}