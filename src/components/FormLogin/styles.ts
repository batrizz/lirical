import styled from 'styled-components'

export const Container = styled.div`
  width: 70rem;
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 160px rgba(0, 0, 0.1, 0.1);
  z-index: 100;

  section {
    width: 100%;
    height: 40rem;
    div {
      display: flex;
      justify-content: center;
    }
    .welcome {
      width: 100%;
      height: 80%;
      flex-direction: column;
    }
    .icons {
      height: 20%;
      align-items: center;
      gap: 2rem;

      svg {
        width: 3rem;
        height: 3rem;
        flex-shrink: inherit;
      }
    }
  }
  svg {
    height: 40rem;
    border-radius: 1rem 0 0 1rem;
  }
`
