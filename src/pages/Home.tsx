import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button'

export function Home() {
    const history = useHistory();

    function navigateToNewRoom() {
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                 <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respotas" />
                 <strong>Crie salas de Q&amp;A ao vivo</strong>
                 <p>Tire as dúvidas da sua audiência em temo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separetor">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}