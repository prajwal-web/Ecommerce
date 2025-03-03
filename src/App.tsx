import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import AppRoute from './components/router/AppRoute';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
