import { PaymentType } from '../types/payment-type';
import { useCurrency } from './useCurrency';

const cleanValues = (value: string) => {
  return value.replace(/[^\d.]/g, '');
};

const calcIOF = (value: number, payment: PaymentType) => {
  if (payment === PaymentType.MONEY) return (value * 1.1) / 100;
  else return (value * 6.4) / 100;
};

const useConvert = () => {
  const { value, currencyValues, rate, paymentType } = useCurrency();

  const convertAmount = Number(cleanValues(value));
  const tax = Number(cleanValues(rate));
  const dollarValue = Number(cleanValues(currencyValues));
  const stateTax = (convertAmount * tax) / 100;
  const iof = calcIOF(convertAmount, paymentType);
  const dolarWithRate = convertAmount - stateTax - iof;
  const realWithoutRate = convertAmount * dollarValue;

  const realWithRate =
    paymentType === PaymentType.MONEY
      ? (convertAmount - stateTax) * (dollarValue - iof)
      : (convertAmount - stateTax - iof) * dollarValue;

  return {
    realWithRate,
    realWithoutRate,
    convertAmount,
    dolarWithRate,
    dollarValue,
    stateTax,
    iof,
  };
};

export default useConvert;
