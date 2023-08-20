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

export const ContainerForm = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 32px;
  max-width: 360px;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    > button {
      width: 100%;
    }
  }
`;
