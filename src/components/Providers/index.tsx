import { PropsWithChildren } from 'react';
import { CurrencyProvider } from '../../contexts/CurrencyContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }: PropsWithChildren) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <CurrencyProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CurrencyProvider>
    </QueryClientProvider>
  );
};

export default Providers;
