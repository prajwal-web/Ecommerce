import { Box } from '@mui/material';
import React from 'react';
import ProductImageCard from './ProductImageCard';
import ProductDetailsCard from './ProductDetailsCard';

const ProductCardDetails = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100vw', mt: '27px' }}>
      <ProductImageCard productImg="abc" />
      <ProductDetailsCard productName="Makaveli Jeans - Sahara" productPrice={2484.63} />
    </Box>
  );
};

export default ProductCardDetails;
