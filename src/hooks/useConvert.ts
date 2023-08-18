import { PaymentType } from '../types/payment-type';
import { useCurrency } from './useCurrency';

const cleanValues = (value: string) => {
  return value.replace(/[^\d.]/g, '');
};

const calcIOF = (value: number, payment: PaymentType) => {
  let percentageIOF;
  let IOF;
  if (payment === PaymentType.MONEY) {
    percentageIOF = 1.1 / 100;
    IOF = value * percentageIOF;
  } else {
    percentageIOF = 6.4 / 100;
    IOF = value * percentageIOF;
  }

  return {
    percentageIOF,
    IOF,
  };
};

const useConvert = () => {
  const { value, currencyValues, rate, paymentType } = useCurrency();

  const dolar = Number(currencyValues);
  const convertAmount = Number(cleanValues(value));
  const { IOF, percentageIOF } = calcIOF(convertAmount, paymentType);
  const percentageStateFee = Number(cleanValues(rate)) / 100;
  const stateFee = convertAmount * percentageStateFee;
  const dolarWithRate = convertAmount + IOF + stateFee;
  const realWithoutRate = convertAmount * dolar;

  const realWithRate =
    paymentType === PaymentType.MONEY
      ? (convertAmount + stateFee) * (dolar + percentageIOF)
      : (convertAmount + stateFee + percentageIOF) * dolar;

  return {
    dolar,
    convertAmount,
    stateFee,
    IOF,
    realWithRate,
    realWithoutRate,
    dolarWithRate,
  };
};

export default useConvert;
