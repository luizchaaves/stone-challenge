import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    svg {
      width: 120px;
      height: 47px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: start;
  gap: 8px;
  color: var(--stoneGreen);

  &::before {
    content: '';
    height: 4px;
    width: 100%;
    background: var(--stoneGreen);
    opacity: 0.3;
    margin-top: 5px;
    display: flex;
  }
`;
