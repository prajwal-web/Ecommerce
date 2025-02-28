import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Landingpage from './components/pages/Landingpage';
import ProductProvider from './context/providers/ProductProvider';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductProvider>
        <Landingpage />
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
