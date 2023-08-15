import InputGroup from '../InputGroup';
import RadioGroup from '../RadioGroup';
import { Container, Wrapper } from './styles';

const Form = () => {
  return (
    <Wrapper>
      <Container>
        <InputGroup />
        <RadioGroup />
      </Container>
    </Wrapper>
  );
};

export default Form;
