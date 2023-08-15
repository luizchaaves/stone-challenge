import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    flex-direction: column;
    gap: 10px;
  }
`;
