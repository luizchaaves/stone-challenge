import { useCurrency } from '../../hooks/useCurrency';
import { maskCurrency } from '../../utils/maskCurrency';
import { maskPercentage } from '../../utils/maskPercentage';
import Input from '../Input';
import { Container } from './styles';

const handleChangeValue = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const formattedValue = maskCurrency(value);
  setState(formattedValue);
};

const handleChangeRate = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const formattedValue = maskPercentage(value);
  setState(formattedValue);
};

const InputGroup = () => {
  const { value, rate, setValue, setRate } = useCurrency();

  return (
    <Container>
      <Input
        id="input_value"
        label="Dólar"
        placeholder="$ 0.00"
        value={value}
        inputMode="numeric"
        onChange={({ currentTarget }) =>
          handleChangeValue(currentTarget.value, setValue)
        }
      />

      <Input
        id="input_rate"
        label="Taxa de Estado"
        placeholder="0 %"
        value={rate}
        inputMode="numeric"
        onChange={({ currentTarget }) =>
          handleChangeRate(currentTarget.value, setRate)
        }
      />
    </Container>
  );
};

export default InputGroup;
