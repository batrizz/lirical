import styled from 'styled-components'

export const Container = styled.button`
  width: 20rem;
  height: 3.2rem;

  margin: 0.5rem 0;
  background: ${props => props.theme.colors.primary.normal};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 0.6rem;

  transition-duration: 0.4s;
  :hover {
    background: ${props => props.theme.colors.primary.dark};
  }
`
