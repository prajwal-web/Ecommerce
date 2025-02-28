import { Container, Box } from '@mui/material';
import { MoveRight, ShoppingCart } from 'lucide-react';
import BackgroundComponent from '../core/BackgroundComponent';
import Logo from '../core/Logo';
import MarketingComponent from '../core/MarketingComponent';
import CoreButton from '../core/CoreButton';
import { useMediaQuery } from '@mui/material';
import ProductCard from './ProductCard';
import FooterComponent from '../core/FooterComponent';
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
      <BackgroundComponent
        showChildren={true}
        src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg"
      >
        {HomeComponents}
      </BackgroundComponent>
    </Container>
  ) : (
    <>
      <BackgroundComponent
        showChildren={true}
        src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg"
      >
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
          carouselBtn={false}
        />
      </Box>
      <BackgroundComponent
        showChildren={true}
        src="https://images.unsplash.com/photo-1634564235572-cd6f37694266?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <Container sx={{ paddingTop: '30px', height: 207, width: 402 }} maxWidth="lg">
          {null}
        </Container>
      </BackgroundComponent>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <ProductCard
          title="Most Ordered"
          description="Makaveli Jeans-Sahar"
          price={3256.55}
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F45%2F24458b4ee703c2ef5899c2586da0f442ca2e0a1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          carouselBtn={true}
        />
      </Box>
      <Box>
        <FooterComponent />
      </Box>
    </>
  );
};

export default Home;
