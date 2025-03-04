import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import './styles/index.css';
import AppRoute from './Router/AppRoute';
import { useEffect } from 'react';
import initCustomFetch from './mocks';

function App() {
  useEffect(() => {
    initCustomFetch();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
