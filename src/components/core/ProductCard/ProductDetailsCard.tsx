import { Box, Typography } from '@mui/material';
import React from 'react';
import CoreButton from '../CoreButton';

type TProductDetailsCard = { productName: string; productPrice: number; isCrouser?: boolean };

const ProductDetailsCard = ({ productName, productPrice, isCrouser = false }: TProductDetailsCard) => {
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '15px'
      }}
    >
      <Typography variant="h3" color='#080808'>{productName}</Typography>
      <Typography variant='body1' color='#080808'>Rs. {productPrice}</Typography>
      <Typography variant='body1' color='secondary' lineHeight={1.2}>Shipping calculated at checkout.</Typography>
      <CoreButton text="Choose Options" />
      {isCrouser && <Typography>Crouser Component</Typography>}
    </Box>
  );
};

export default ProductDetailsCard;
