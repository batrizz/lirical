import { Container } from './styles'

interface IButtonProps {
  type: any
  name: string
}

function Button({ type, name }: IButtonProps) {
  return <Container type={type}>{name}</Container>
}

export default Button
