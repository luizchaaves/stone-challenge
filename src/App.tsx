import './styles/global.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/styles';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
