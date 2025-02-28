import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Landingpage from './components/pages/Landingpage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landingpage />
    </ThemeProvider>
  );
}

export default App;
