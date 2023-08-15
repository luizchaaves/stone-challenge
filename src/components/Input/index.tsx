import { ComponentProps } from 'react';
import { Container, Label } from './styles';

type InputProps = ComponentProps<'input'> & {
  id: string;
  label: string;
};

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} name={id} type="text" {...props} />
    </Container>
  );
};

export default Input;
