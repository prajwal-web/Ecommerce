import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import ContextProvider from './Contexts/ContextProvider';
import './styles/index.css';
import AppRoute from './Router/AppRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <BrowserRouter>
        <AppRoute/>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
