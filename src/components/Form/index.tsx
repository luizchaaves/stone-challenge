import { ButtonType } from '../../types/button-type';
import InputGroup from '../InputGroup';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import TransferIcon from '../../assets/TransferIcon';
import { ContainerForm, Wrapper } from './styles';
import { useCurrency } from '../../hooks/useCurrency';

const Form = () => {
  const { value, rate } = useCurrency();

  const verifyDisabled = () => {
    let verifyValue = value.replace(/[^\d]/g, '');
    let verifyRate = rate.replace(/[^\d.]/g, '');

    if (verifyValue.length && verifyRate.length && !(verifyValue === '000'))
      return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('button converter');
  };

  return (
    <Wrapper>
      <ContainerForm onSubmit={handleSubmit}>
        <InputGroup />
        <RadioGroup />

        <Button styleBtn={ButtonType.PRIMARY} disabled={verifyDisabled()}>
          <TransferIcon />
          Converter
        </Button>
      </ContainerForm>
    </Wrapper>
  );
};

export default Form;
