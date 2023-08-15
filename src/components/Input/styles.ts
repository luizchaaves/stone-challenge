import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    border: 1px solid var(--mediumGray3);
    background: var(--white);
    color: var(--darkGray);
    font-size: 16px;
    font-weight: 400;
    padding: 16px;
    width: 136px;
    border-radius: 4px;

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
