import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 136px;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    width: 100%;
  }

  input {
    border: 1px solid var(--mediumGray3);
    background: var(--white);
    color: var(--darkGray);
    font-size: 16px;
    font-weight: 400;
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.08);

    &::placeholder {
      color: var(--mediumGray2);
    }

    &:focus {
      outline: none;
    }

    @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
      font-size: 14px;
    }
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  color: var(--darkGray);

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 16px;
  }
`;
