import { ButtonType } from '../../types/button-type';
import InputGroup from '../InputGroup';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import TransferIcon from '../../assets/TransferIcon';
import { ContainerForm, Wrapper } from './styles';
import { useCurrency } from '../../hooks/useCurrency';
import useValues from '../../hooks/useValues';
import CustomStyleSheetManager from '../CustomStyleSheetManager';

interface FormProps {
  setConvertedValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ setConvertedValue }: FormProps) => {
  const { value, rate } = useCurrency();
  const getValues = useValues();

  const verifyDisabled = () => {
    let verifyValue = value.replace(/[^\d]/g, '');
    let verifyRate = rate.replace(/[^\d.]/g, '');

    if (verifyValue.length && verifyRate.length && !(verifyValue === '000'))
      return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (getValues.isStale) getValues.refetch();
    setConvertedValue((prev) => !prev);
  };

  return (
    <Wrapper>
      <ContainerForm onSubmit={handleSubmit}>
        <InputGroup />
        <RadioGroup />
        <CustomStyleSheetManager>
          <Button
            stylebtn={ButtonType.PRIMARY}
            disabled={verifyDisabled()}
            type="submit"
          >
            <TransferIcon />
            Converter
          </Button>
        </CustomStyleSheetManager>
      </ContainerForm>
    </Wrapper>
  );
};

export default Form;
