import { Container } from './styles'

interface IButtonProps {
  type: any
  name: string
  className?: any
}

function Button({ type, name, className }: IButtonProps) {
  return (
    <Container className={className} type={type}>
      {name}
    </Container>
  )
}

export default Button
