import { Container } from './styles'

import Logo from '../../assets/images/logo.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Gmail from '../../assets/icons/gmail.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import { Button } from '../Button'

interface IFormProps {
  imgLeftSide?: any
  textWelcome?: any
  input?: any
  signIn?: any
  forgotPassword?: any
  buttonLogin?: string
  onClick?: any
}

function FormLogin({
  imgLeftSide,
  textWelcome,
  input,
  signIn,
  forgotPassword,
  buttonLogin,
  onClick
}: IFormProps) {
  return (
    <Container>
      <section className="imgLeftSide">{imgLeftSide}</section>
      <section>
        <div />
        <div className="welcome">
          <p>Bem vindo(a)</p>
          <h1>{textWelcome}</h1>
        </div>
        <div className="icons">
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Gmail />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </section>
      <section className="formLogin">
        <div>
          <Logo />
          <form>
            {input}
            <Button name="Entrar" type="submit" />
          </form>
          {signIn}
          {forgotPassword}
        </div>
        <div>
          <Button
            onClick={onClick}
            className="buttonClinica"
            name={buttonLogin}
            type="button"
          />
        </div>
      </section>
    </Container>
  )
}

export default FormLogin
