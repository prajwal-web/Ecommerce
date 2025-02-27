import { Container, Box } from '@mui/material';
import { MoveRight, ShoppingCart } from 'lucide-react';
import BackgroundComponent from '../core/BackgroundComponent';
import Logo from '../core/Logo';
import MarketingComponent from '../core/MarketingComponent';
import CoreButton from '../core/CoreButton';
import { useMediaQuery } from '@mui/material';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const HomeComponents = (
    <Box sx={{ position: 'relative', height: 'calc(100vw*0.9)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            left: {
              xs: '50%',
              sm: '0'
            },
            transform: {
              xs: 'translate(-50%)',
              sm: 'translate(0)'
            }
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            marginLeft: 'auto',
            width: {
              xs: '24px',
              sm: '40px'
            }
          }}
        >
          <ShoppingCart size="100%" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
      >
        <MarketingComponent text="Street&#45;Built&#44; Hype-Approved" backgroundColor="rgba(111,163,199,0.7)" />
        <CoreButton text="Shop Now" icon={<MoveRight color="#fff" />} />
      </Box>
    </Box>
  );
  return isDesktop ? (
    <Container>
      <BackgroundComponent src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg">
        {HomeComponents}
      </BackgroundComponent>
    </Container>
  ) : (
    <BackgroundComponent src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg">
      <Container sx={{ paddingTop: '20px' }} maxWidth="lg">
        {HomeComponents}
      </Container>
    </BackgroundComponent>
  );
};

export default Home;
