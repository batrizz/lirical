import { HtmlHTMLAttributes } from 'react'

import { Container } from './styles'

type IButtonProps = {
  type: any
  name: string
  className?: any
  onClick?: any
} & HtmlHTMLAttributes<HTMLButtonElement>

export const Button = ({ name, ...props }: IButtonProps) => (
  <Container {...props}>{name}</Container>
)
