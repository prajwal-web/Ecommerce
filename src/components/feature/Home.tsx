import { Container, Box } from '@mui/material';
import { MoveRight, ShoppingCart } from 'lucide-react';
import BackgroundComponent from '../core/BackgroundComponent';
import Logo from '../core/Logo';
import MarketingComponent from '../core/MarketingComponent';
import CoreButton from '../core/CoreButton';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const HomeComponents = (
    <Box sx={{ position: 'relative', height: { xs: 'calc(100vw*0.9)', sm: '80vh' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            left: {
              xs: '50%',
              sm: '2%'
            },
            top: { sm: '30%' },
            transform: {
              xs: 'translate(-50%)',
              sm: 'translate(0)'
            }
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box
          sx={{
            marginLeft: 'auto',
            marginRight: { sm: '20px' },
            marginTop: 2,
            width: {
              xs: '24px',
              sm: '40px'
            }
          }}
        >
          <Link to="/products">
            <ShoppingCart size="100%" color='black'/>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: { xs: 0, sm: '4%' }
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
