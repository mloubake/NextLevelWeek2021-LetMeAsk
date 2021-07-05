import illustration  from '../assets/images/illustration.svg'
import logo  from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import {Button} from '../components/Button'

import '../styles/auth.scss'

export function Home() {
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
					<button className="create-room">
						<img src={googleIcon} alt="GoogleIcon"/>
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
	)
}
