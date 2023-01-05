import { useRouter } from 'next/router'

import FormLogin from '@/components/FormLogin'
import Input from '@/components/Input'

import Back from '../assets/images/Back.svg'
import Work from '../assets/images/work.svg'

import { Container } from '../styles/pages/Home'
import Link from 'next/link'

function loginAdmin() {
  const router = useRouter()
  return (
    <Container>
      <Back />
      <FormLogin
        textWelcome={
          'Insira sua clínica em nosso sistema para facilitar a organização da sua agenda'
        }
        imgLeftSide={<Work />}
        input={
          <>
            <Input type="text" placeholder="E-mail corporativo" />
            <Input type="text" placeholder="Senha" />
          </>
        }
        signIn={
          <p>
            Quer adquirir nosso serviços?
            <Link href="/">
              <b> Entre em contato</b>
            </Link>
          </p>
        }
        forgotPassword={
          <p>
            ou esqueceu sua senha?
            <Link href="/">
              <b> Alterar senha</b>
            </Link>
          </p>
        }
        buttonLogin={'Login Usuário'}
        onClick={() => router.push('/')}
      />
    </Container>
  )
}

export default loginAdmin
