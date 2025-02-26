import { ThemeProvider, Container, CssBaseline, Box, Typography } from '@mui/material';
import theme from './theme';
import BackgroundComponent from './components/core/BackgroundComponent';
import Logo from './components/core/Logo';
import { ShoppingCart } from 'lucide-react'
import MarketingComponent from './components/core/MarketingComponent';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundComponent src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg">
        <Container sx={{ paddingTop: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>
              <Logo />
            </Box>
            <Box sx={{ marginLeft: 'auto' }}>
              <ShoppingCart />
            </Box>
          </Box>
          <MarketingComponent text='Street&#45;Built&#44; Hype-Approved'/>
        </Container>
      </BackgroundComponent>
    </ThemeProvider>
  );
}



export default App;
