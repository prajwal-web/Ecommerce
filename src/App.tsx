import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './components/feature/Home';
import ContextProvider from './Contexts/ContextProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <Home />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;