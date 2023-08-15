import styled from 'styled-components';

export const CustomRadio = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--mediumGray2);
  border-radius: 50%;
  display: grid;
  place-content: center;

  span {
    content: '';
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + ${CustomRadio} {
    border-color: var(--primary);
  }

  input[type='radio']:checked + ${CustomRadio} span {
    background: var(--primary);
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 14px;
  }
`;
