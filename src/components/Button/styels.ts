import styled from 'styled-components';
import { ButtonProps } from '.';
import { ButtonType } from '../../types/button-type';

export const ButtonComponent = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  color: ${(props) =>
    props.stylebtn === ButtonType.PRIMARY ? 'var(--white)' : 'var(--darkGray)'};
  background: ${(props) =>
    props.stylebtn === ButtonType.PRIMARY
      ? 'var(--stoneGreen)'
      : 'var(--white)'};
  border: 1px solid
    ${(props) =>
      props.stylebtn === ButtonType.PRIMARY
        ? 'var(--primary)'
        : 'var(--mediumGray3)'};

  &:disabled {
    cursor: not-allowed;
    background: ${(props) =>
      props.stylebtn === ButtonType.PRIMARY
        ? 'var(--mediumGray2)'
        : 'var(--white)'};
  }
`;
