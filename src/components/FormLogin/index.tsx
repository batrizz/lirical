import { Container } from './styles'

import Makeup from '../../assets/images/makeup.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Gmail from '../../assets/icons/gmail.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'

function FormLogin() {
  return (
    <Container>
      <section>
        <Makeup />
      </section>
      <section>
        <div className="welcome">
          <p>Bem vindo(a)</p>
          <h1>
            Acesse e marque um horário com a melhor plataforma de agendamento em
            estética
          </h1>
        </div>
        <div className="icons">
          <Instagram />
          <Facebook />
          <Gmail />
          <Twitter />
        </div>
      </section>
      <section>
        <h1>part 3</h1>
      </section>
    </Container>
  )
}

export default FormLogin
