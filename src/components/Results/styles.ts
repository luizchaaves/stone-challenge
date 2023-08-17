import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 105px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 32px;
  max-width: 296px;
  width: 100%;
`;

export const ConversionResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: var(--darkGray2);
  }

  span {
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    color: var(--stoneGreen);
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    p {
      font-size: 16px;
      line-height: 26px;
    }

    span {
      font-size: 48px;
      line-height: 64px;
    }
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  color: #6e7e90;
  font-size: 14px;

  p {
    font-weight: 500;
    line-height: 32px;

    span {
      font-weight: 400;
    }
  }
`;
