import { Box } from '@mui/material';

type TProductImg = {
  productImg: string;
};

const ProductImageCard = ({ productImg }: TProductImg) => {
  return (
    <Box
      sx={{
        // width: '45%',
        flex: 1,
        height: {xs: '257px', sm: '100%', lg: '350px'}
      }}
    >
      <Box
        component="img"
        sx={{
          // height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        alt="productImg"
        src={productImg}
      />
    </Box>
  );
};

export default ProductImageCard;
