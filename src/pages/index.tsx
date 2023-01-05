import React from 'react'
import { useRouter } from 'next/router'

import FormLogin from '@/components/FormLogin'
import Input from '../components/Input'

import Makeup from '../assets/images/makeup.svg'
import Back from '../assets/images/Back.svg'

import { Container } from '../styles/pages/Home'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  return (
    <Container>
      <Back />
      <FormLogin
        textWelcome={
          <h1>
            Acesse e <b> marque um horário </b>com a melhor plataforma de
            agendamento em estética
          </h1>
        }
        imgLeftSide={<Makeup />}
        input={
          <>
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
          </>
        }
        signIn={
          <p>
            Ainda não tem um cadastro?
            <Link href="/cadastro">
              <b> Cadastre-se aqui</b>
            </Link>
          </p>
        }
        forgotPassword={
          <p>
            ou esqueceu sua senha?
            <Link href="#">
              <b> Alterar senha</b>
            </Link>
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
