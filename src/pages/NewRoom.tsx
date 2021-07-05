import illustration  from '../assets/images/illustration.svg'
import logo  from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import {Button} from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
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
					<h2>Criar uma nova sala</h2>
					<form>
						<input
							type="text"
							placeholder="Nome da sala"
						/>
						<Button type="submit">Criar sala</Button>
					</form>
					<p>Quer entrar em uma sala existente? <a href="#">Clique Aqui</a></p>
				</div>
			</main>
		</div>
	)
}
