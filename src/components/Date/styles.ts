import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--mediumGray2);
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    align-items: center;

    p {
      text-align: center;
      font-size: 12px;
    }
  }
`;

export const DateNow = styled.div`
  color: var(--darkGray2);
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  font-size: 18px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    gap: 8px;
    font-size: 16px;
  }
`;
