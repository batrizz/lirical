// import { forwardRef } from 'react'
// import InputMask, { Props } from 'react-input-mask'

import { Container } from './styles'

interface IInputProps {
  placeholder: string
  type: any
}

function Input({ placeholder, type }: IInputProps) {
  return <Container type={type} placeholder={placeholder} />
}
export default Input
