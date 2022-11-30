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

  .makeup {
    > svg {
      width: 100%;
      height: 100%;
      top: 0;
      border-radius: 1rem 0 0 1rem;
    }
  }
  section {
    width: 100%;
    height: 40rem;
    div {
      width: 100%;
      height: 33.33%;
      display: flex;
      justify-content: left;
      padding: 0 3rem;
    }
    .welcome {
      flex-direction: column;
      p {
        color: ${props => props.theme.colors.primary.normal};
      }
      h1 {
        width: 14rem;
        color: ${props => props.theme.colors.text.dark};
      }
    }
    .icons {
      align-items: flex-end;
      padding-bottom: 3rem;
      gap: 2rem;
      > svg {
        width: 2rem;
        height: 2rem;
        flex-shrink: inherit;
      }
    }
  }
`
