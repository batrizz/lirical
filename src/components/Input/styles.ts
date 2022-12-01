import styled from 'styled-components'

export const Container = styled.input`
  width: 20rem;
  height: 3.2rem;

  margin: 0.5rem 0;
  padding: 1rem 2rem;
  border: 1px solid ${props => props.theme.colors.primary.normal};
  border-radius: 0.6rem;

  font-size: 14px;
`
