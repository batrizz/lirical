import Link from 'next/link'

import Makeup from '../assets/images/makeup.svg'
import Logo from '../assets/images/logo.svg'
import Back from '../assets/images/Back.svg'
import Instagram from '../assets/icons/instagram.svg'
import Gmail from '../assets/icons/gmail.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twitter.svg'

import Input from '@/components/Input'
import { Button } from '@/components/Button'

import { Container, FormSignIn } from '../styles/pages/cadastro'

interface IFormProps {
  imgLeftSide?: any
  textWelcome?: string
  input?: any
  signIn?: any
  forgotPassword?: any
  buttonLogin?: string
  onClick?: any
}

function SignIn() {
  return (
    <Container>
      <Back />
      <FormSignIn>
        <section className="imgLeftSide">
          <Makeup />
        </section>
        <section>
          <div />
          <div className="welcome">
            <p>Bem vindo(a)</p>
            <h1>
              Acesse e <b> marque um horário</b> com a melhor plataforma de
              agendamento em estética
            </h1>
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
              <Input type="text" placeholder="Nome completo" />
              <Input type="text" placeholder="Telefone" />
              <Input type="text" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirmar senha" />

              <Button name="Entrar" type="submit" />
            </form>
            <p>
              Já tem um login?
              <Link href="/">
                <b> Entrar aqui</b>
              </Link>
            </p>
          </div>
        </section>
      </FormSignIn>
    </Container>
  )
}

export default SignIn
