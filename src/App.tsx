import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import ProductProvider from './context/providers/ProductProvider';
import { BrowserRouter } from 'react-router';
import AppRoute from './components/router/appRoute';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
