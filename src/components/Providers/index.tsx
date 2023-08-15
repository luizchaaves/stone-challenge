import { PropsWithChildren } from 'react';
import { CurrencyProvider } from '../../contexts/CurrencyContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/styles';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CurrencyProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CurrencyProvider>
  );
};

export default Providers;
