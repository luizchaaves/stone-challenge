import { PropsWithChildren, createContext, useState } from 'react';
import { PaymentType } from '../types/payment-type';

type ICurrencyContext = {
  value: string;
  currencyValues: string;
  rate: string;
  paymentType: PaymentType;
  setCurrencyValues: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setRate: React.Dispatch<React.SetStateAction<string>>;
  setPaymentType: React.Dispatch<React.SetStateAction<PaymentType>>;
};

export const CurrencyContext = createContext<ICurrencyContext | null>(null);

export const CurrencyProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState('');
  const [currencyValues, setCurrencyValues] = useState('');
  const [rate, setRate] = useState('');
  const [paymentType, setPaymentType] = useState<PaymentType>(
    PaymentType.MONEY
  );

  return (
    <CurrencyContext.Provider
      value={{
        value,
        currencyValues,
        rate,
        paymentType,
        setValue,
        setCurrencyValues,
        setRate,
        setPaymentType,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
