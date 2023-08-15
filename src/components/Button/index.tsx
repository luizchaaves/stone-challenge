import { ComponentProps } from 'react';
import { ButtonComponent } from './styels';
import { ButtonType } from '../../types/button-type';

export type ButtonProps = ComponentProps<'button'> & {
  styleBtn: ButtonType;
};

const Button = ({ children, styleBtn, ...props }: ButtonProps) => {
  return (
    <ButtonComponent styleBtn={styleBtn} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
