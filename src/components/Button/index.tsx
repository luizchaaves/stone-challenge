import { ComponentProps } from 'react';
import { ButtonComponent } from './styels';
import { ButtonType } from '../../types/button-type';
import CustomStyleSheetManager from '../CustomStyleSheetManager';

export type ButtonProps = ComponentProps<'button'> & {
  stylebtn: ButtonType;
};

const Button = ({ children, stylebtn, ...props }: ButtonProps) => {
  return (
    <CustomStyleSheetManager>
      <ButtonComponent stylebtn={stylebtn} {...props}>
        {children}
      </ButtonComponent>
    </CustomStyleSheetManager>
  );
};

export default Button;
