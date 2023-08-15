import { useCurrency } from '../../hooks/useCurrency';
import { Container } from './styles';
import Radio from '../Radio';
import { PaymentType } from '../../types/payment-type';

const RadioGroup = () => {
  const { paymentType, setPaymentType } = useCurrency();

  return (
    <Container>
      <p>Tipo de compra</p>
      <div>
        <Radio
          id="radio_money"
          label="Dinheiro"
          value={PaymentType.MONEY}
          checked={paymentType === PaymentType.MONEY}
          onChange={() => setPaymentType(PaymentType.MONEY)}
        />
        <Radio
          id="radio_card"
          label="Cartão"
          value={PaymentType.CARD}
          checked={paymentType === PaymentType.CARD}
          onChange={() => setPaymentType(PaymentType.CARD)}
        />
      </div>
    </Container>
  );
};

export default RadioGroup;
