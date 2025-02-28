import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './components/feature/Home';
import ProductCard from './components/feature/ProductCard';
import BackgroundComponent from './components/core/BackgroundComponent';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <ProductCard />
      <BackgroundComponent src='https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg' />
    </ThemeProvider>
  );
}

export default App;
