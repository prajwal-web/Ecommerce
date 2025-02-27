import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './components/feature/Home';
// https://www.figma.com/design/bCtH6X3nCDXoonnokFkZmx/Zune?node-id=0-1&m=dev&t=w1oOCrNFN1dkQfja-1

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
