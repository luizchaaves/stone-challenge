import { Currency } from '../interfaces/interface';

const API_URL = 'https://economia.awesomeapi.com.br';

export const getCurrencyValues = async (): Promise<Currency> => {
  const response = await fetch(`${API_URL}/json/last/USD-BRL`, {
    method: 'GET',
  });
  const json: Currency = await response.json();
  return json;
};
