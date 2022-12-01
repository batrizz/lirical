import FormLogin from '@/components/FormLogin'
import React from 'react'

import Makeup from '../assets/images/makeup.svg'
import Back from '../assets/images/Back.svg'
import { Container } from '../styles/pages/Home'
import Input from '../components/Input'

export default function Home() {
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
