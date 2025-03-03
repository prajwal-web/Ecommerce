import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/feature/Home';
import ContextProvider from './Contexts/ContextProvider';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
