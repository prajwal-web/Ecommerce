import { Box } from '@mui/material';

type TProductImg = {
  productImg: string;
};

const ProductImageCard = ({ productImg }: TProductImg) => {
  return (
    <Box
      sx={{
        flex: 1,
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
