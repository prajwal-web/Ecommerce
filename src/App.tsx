import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { BrowserRouter } from 'react-router';
import AppRoute from './components/router/AppRoute';
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
