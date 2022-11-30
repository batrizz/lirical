import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  background: ${props => props.theme.colors.primary.normal};

  > svg {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
  }
`
