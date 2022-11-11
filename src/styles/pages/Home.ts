import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-y: hidden;

  background: ${props => props.theme.colors.primary.normal};

  > svg {
    display: flex;
    position: absolute;
    right: 0;
    z-index: 10;
  }
`
