import React from 'react'
import { useRouter } from 'next/router'

import FormLogin from '@/components/FormLogin'
import Input from '../components/Input'

import Makeup from '../assets/images/makeup.svg'
import Back from '../assets/images/Back.svg'

import { Container } from '../styles/pages/Home'

export default function Home() {
  const router = useRouter()
  return (
    <Container>
      <Back />
      <FormLogin
        textWelcome={
          'Acesse e marque um horário com a melhor plataforma de agendamento em estética'
        }
        imgLeftSide={<Makeup />}
        input={
          <>
            <Input type="text" placeholder="E-mail" />
            <Input type="text" placeholder="Senha" />
          </>
        }
        signIn={
          <p>
            Ainda não tem um cadastro?
            <a href="#">
              <b> Cadastre-se aqui</b>
            </a>
          </p>
        }
        forgotPassword={
          <p>
            ou esqueceu sua senha?
            <a href="#">
              <b> Alterar senha</b>
            </a>
          </p>
        }
        buttonLogin={'Login Clínica'}
        onClick={() => router.push('/loginAdmin')}
      />
    </Container>
  )
}

// import { Container } from './styles'

// function Test() {
//   return (
//     <Container>
//       <h1>Test</h1>
//     </Container>
//   )
// }

// export default Test
