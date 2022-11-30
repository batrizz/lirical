import FormLogin from '@/components/FormLogin'
import React from 'react'

import Back from '../assets/images/Back.svg'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Back />
      <FormLogin />
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
