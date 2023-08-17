import { useQuery } from 'react-query';
import { useCurrency } from './useCurrency';
import { getCurrencyValues } from '../services/api';

const useValues = () => {
  const { setCurrencyValues } = useCurrency();

  return useQuery({
    queryFn: () => getCurrencyValues(),
    queryKey: ['currency-value'],
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSuccess: (data) => {
      setCurrencyValues(data.USDBRL.bid);
    },
  });
};

export default useValues;
