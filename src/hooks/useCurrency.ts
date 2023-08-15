import { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do provider');
  return context;
};
