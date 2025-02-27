import { Container, Box } from '@mui/material';
import { MoveRight, ShoppingCart } from 'lucide-react';
import BackgroundComponent from '../core/BackgroundComponent';
import Logo from '../core/Logo';
import MarketingComponent from '../core/MarketingComponent';
import CoreButton from '../core/CoreButton';
import { useMediaQuery } from '@mui/material';
import ProductCard from './ProductCard';
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
    <>
      <BackgroundComponent src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg">
        <Container sx={{ paddingTop: '20px' }} maxWidth="lg">
          {HomeComponents}
        </Container>
      </BackgroundComponent>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <ProductCard
          title="Latest Drop"
          description="Makaveli Jeans-Sahar"
          price={2484.63}
          imageUrl="https://th.bing.com/th/id/R.8d7b588525c02221e42f3e05d560704f?rik=wZva%2b414HnWaRQ&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fSELLER%2fDefault%2f2020%2f10%2fMU%2fNB%2fZA%2f20506059%2fmen-s-jeans-photography-500x500.JPG&ehk=DP6emqd9%2bP8zqVhJPIPgA8fOAJpYY%2bPlWGpzfgX8RVM%3d&risl=&pid=ImgRaw&r=0"
        />
      </Box>
    </>
  );
};

export default Home;
