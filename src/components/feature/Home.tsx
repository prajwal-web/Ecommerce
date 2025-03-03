import { Container, Box, useMediaQuery } from '@mui/material';
import { MoveRight, ShoppingCart } from 'lucide-react';
import BackgroundComponent from '../core/BackgroundComponent';
import Logo from '../core/Logo';
import MarketingComponent from '../core/MarketingComponent';
import CoreButton from '../core/CoreButton';
import ProductCard from './ProductCard';
import FooterComponent from '../core/FooterComponent';
import { Link } from 'react-router-dom';

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
              sm: '40px',
              cursor: 'pointer'
            }
          }}
        >
          <Link to="products">
            <ShoppingCart size="100%" />
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
          bottom: 0,
          right: 0
        }}
      >
        <MarketingComponent text="Street&#45;Built&#44; Hype-Approved" backgroundColor="rgba(111,163,199,0.7)" />
        <CoreButton text="Shop Now" icon={<MoveRight color="#fff" />} />
      </Box>
    </Box>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <BackgroundComponent
        showChildren={true}
        src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740210215/main_pdl5dx.jpg"
      >
        <Container>
          <Box sx={{ position: 'relative', height: 'calc(100vw*0.9)' }}>{HomeComponents}</Box>
        </Container>
      </BackgroundComponent>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <ProductCard
          title="Latest  Drop"
          description="Makaveli Jeans-Sahar"
          price={3256.55}
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F45%2F24458b4ee703c2ef5899c2586da0f442ca2e0a1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          carouselBtn={false}
        />
        {isDesktop && (
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <ProductCard
              title="Most Ordered"
              description="Makaveli Jeans-Sahar"
              price={3256.55}
              imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F45%2F24458b4ee703c2ef5899c2586da0f442ca2e0a1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
              carouselBtn={true}
            />
          </Box>
        )}
      </Box>

      <BackgroundComponent
        showChildren={true}
        src="https://images.unsplash.com/photo-1634564235572-cd6f37694266?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <Container sx={{ paddingTop: '30px', height: { xs: 207 }}} maxWidth="lg">
          {null}
        </Container>
      </BackgroundComponent>

      {!isDesktop && (
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <ProductCard
            title="Most Ordered"
            description="Makaveli Jeans-Sahar"
            price={3256.55}
            imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F45%2F24458b4ee703c2ef5899c2586da0f442ca2e0a1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            carouselBtn={true}
          />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 1
        }}
      >
        <FooterComponent />
      </Box>
    </div>
  );
};

export default Home;
