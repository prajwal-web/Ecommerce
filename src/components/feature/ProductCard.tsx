import React from 'react';
import ProductCardContainer from '../core/ProductCardContainer';
import Heading from '../core/Heading';
import ProductCardDetails from '../core/ProductCard/ProductCardDetails';
import { Container } from '@mui/material';

const ProductCard = () => {
  return (
    <Container maxWidth="lg">
      <ProductCardContainer>
        <Heading headingText="Latest Drep" />
      </ProductCardContainer>
      <ProductCardDetails />
    </Container>
  );
};

export default ProductCard;
