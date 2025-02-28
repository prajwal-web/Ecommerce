import { Box, Container } from '@mui/material';
import BackgroundComponent from '../core/BackgroundComponent';
import Home from '../feature/Home';
import ProductCard from '../feature/ProductCard';
import { products } from '../../mocks/products';
import ProductCarousel from '../core/ProductCard/ProductCarousel';
import { useState } from 'react';
// import { ProductContext } from '../../context/ProductContext';

const Landingpage = () => {
  const [translateX, setTranslateX] = useState(0);
  // const { product } = useContext(ProductContext);
  // console.log(product);
  return (
    <>
      <Home />
      <ProductCard
        headingText="Latest Drep"
        productImg="https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productPrice={2484.63}
      />
      <Container
        sx={{
          my: 6
        }}
      >
        <BackgroundComponent
          src="https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          bgHeight={250}
        />
      </Container>

      <Box sx={{ display: 'flex', overflowX: 'auto' }}>
        {products.map(() => (
          <Box
            sx={{
              transition: 'transform 0.3s ease',
              transform: `translateX(-${translateX}px)`
            }}
            onClick={(e) => {
              {
                const boxWidth = e.currentTarget.offsetWidth;
                setTranslateX((prev) => prev + boxWidth);
              }
            }}
          >
            <ProductCard
              headingText="MOST ORDERED"
              productImg="https://images.unsplash.com/photo-1616003471864-9abfeee24576?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              productPrice={4484.63}
            />
          </Box>
        ))}
      </Box>
      <ProductCarousel />
    </>
  );
};

export default Landingpage;
