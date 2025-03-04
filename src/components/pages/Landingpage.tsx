import { Box, Container, useMediaQuery } from '@mui/material';
import BackgroundComponent from '../core/BackgroundComponent';
import Home from '../feature/Home';
import ProductCard from '../feature/ProductCard';
import ProductCarousel from '../core/ProductCard/ProductCarousel';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Landingpage = () => {
  const desktop = useMediaQuery('(min-width:1200px)');
  const { product } = useContext(ProductContext);
  const [translateX, setTranslateX] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);

  return (
    <>
      <Home />
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: { lg: '45%' } }}>
          <ProductCard
            headingText="Latest Drop"
            productImg="https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            productPrice={2484.63}
          />
        </Box>
        {desktop && (
          <Box sx={{ width: '45%' }}>
            <Box sx={{ display: 'flex', overflow: 'hidden' }}>
              {product.map((item, index) => (
                <Box
                  sx={{
                    transition: 'transform 0.3s ease',
                    transform: `translateX(${translateX}px)`,
                    minWidth: '100%'
                  }}
                  onLoad={(e) => {
                    {
                      const boxWidth = e.currentTarget.offsetWidth;
                      setBoxWidth(boxWidth);
                    }
                  }}
                  key={index}
                >
                  <ProductCard
                    headingText="MOST ORDERED"
                    productImg="https://images.unsplash.com/photo-1616003471864-9abfeee24576?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productPrice={4484.63}
                  />
                </Box>
              ))}
            </Box>
            <ProductCarousel setTranslateX={setTranslateX} boxWidth={boxWidth} />
          </Box>
        )}
      </Container>
      <Box mt={6}>
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 0, lg: 2 }
          }}
        >
          <BackgroundComponent
            src="https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            bgHeight={250}
          />
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ display: { lg: 'none' } }}>
        <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
          {product.map((item, index) => (
            <Box
              sx={{
                transition: 'transform 0.3s ease',
                transform: `translateX(${translateX}px)`,
                minWidth: '100%'
              }}
              onLoad={(e) => {
                {
                  const boxWidth = e.currentTarget.offsetWidth;
                  setBoxWidth(boxWidth);
                }
              }}
              key={index}
            >
              <ProductCard
                headingText="MOST ORDERED"
                productImg="https://images.unsplash.com/photo-1616003471864-9abfeee24576?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productPrice={4484.63}
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Box sx={{ display: { lg: 'none' } }}>
        <ProductCarousel setTranslateX={setTranslateX} boxWidth={boxWidth} />
      </Box>
    </>
  );
};

export default Landingpage;
