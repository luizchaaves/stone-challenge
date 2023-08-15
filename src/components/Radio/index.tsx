import { ComponentProps } from 'react';
import { Label, CustomRadio } from './styles';

type InputProps = ComponentProps<'input'> & {
  id: string;
  label: string;
};

const Radio = ({ id, label, ...props }: InputProps) => {
  return (
    <Label htmlFor={id}>
      <input type="radio" id={id} name={id} {...props} />

      <CustomRadio>
        <span></span>
      </CustomRadio>
      {label}
    </Label>
  );
};

export default Radio;
