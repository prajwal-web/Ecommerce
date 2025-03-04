import { Box } from '@mui/material';
import ProductImageCard from './ProductImageCard';
import ProductCardDetails from './ProductCardDetails';

type TProductCardDetails = {
  productImg: string;
  productPrice: number;
  isCarousel?: boolean;
};

const ProductCardAccumulator = ({ productImg, productPrice }: TProductCardDetails) => {

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3, width: '100%', mt: '27px' }}>
        <ProductImageCard productImg={productImg} />
        <ProductCardDetails productName="Makaveli Jeans - Sahara" productPrice={productPrice} />
      </Box>
    </>
  );
};

export default ProductCardAccumulator;
