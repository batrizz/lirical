import { Container } from './styles'

import Makeup from '../../assets/images/makeup.svg'
import Logo from '../../assets/images/logo.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Gmail from '../../assets/icons/gmail.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Input from '../Input'
import Button from '../Button'

function FormLogin() {
  return (
    <Container>
      <section className="makeup">
        <Makeup />
      </section>
      <section>
        <div />
        <div className="welcome">
          <p>Bem vindo(a)</p>
          <h1>
            <b>Acesse e marque um horário</b> com a melhor plataforma de
            agendamento em estética
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
        <Logo />
        <form>
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Senha" />

          <Button name="Confirmar" type="submit" />
        </form>
        <p>
          Ainda não tem um cadastro? <b>cadastre-se aqui</b>
        </p>
        <p>
          ou esqueceu sua senha? <b>alterar senha</b>
        </p>
        <Button name="Confirmar" type="submit" />
      </section>
    </Container>
  )
}

export default FormLogin
