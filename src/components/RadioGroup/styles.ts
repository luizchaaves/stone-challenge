import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--darkGray);
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    p {
      font-size: 16px;
    }
  }
`;
