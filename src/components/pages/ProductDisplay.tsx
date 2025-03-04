import { Box, Container } from '@mui/material';
import ProductImageCard from '../core/ProductCard/ProductImageCard';
import ProductDetails from '../core/ProductDetails/ProductDetails';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductDisplay = () => {
  return (
    <Container sx={{ minHeight: '100vh', pt: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Carousel width={'243px'} showStatus={false} autoPlay infiniteLoop showThumbs={false}>
        <Box sx={{ p: 1, border: '1px solid black' }}>
          <ProductImageCard
            productImg={
              'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </Box>
        <Box sx={{ p: 1, border: '1px solid black' }}>
          <ProductImageCard
            productImg={
              'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </Box>
        <Box sx={{ p: 1, border: '1px solid black' }}>
          <ProductImageCard
            productImg={
              'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </Box>
      </Carousel>

      <ProductDetails />
    </Container>
  );
};

export default ProductDisplay;
