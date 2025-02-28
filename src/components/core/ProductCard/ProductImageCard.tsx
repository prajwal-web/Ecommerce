import { Box } from '@mui/material';
import React from 'react';

type TProductImg = {
  productImg: string;
};

const ProductImageCard = ({ productImg }: TProductImg) => {
  return (
    <Box
      sx={{
        width: '175px',
        height: "215px"
      }}
    >
      <Box
        component="img"
        sx={{
          height: "100%",
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        alt={productImg}
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
    </Box>
  );
};

export default ProductImageCard;
