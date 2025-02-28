import { Box } from '@mui/material';
import ProductImageCard from './ProductImageCard';
import ProductDetailsCard from './ProductCardDetails';

type TProductCardDetails = {
  productImg: string
  productPrice: number
}

const ProductCardDetails = ({productImg, productPrice}: TProductCardDetails) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100vw', mt: '27px' }}>
      <ProductImageCard productImg={productImg} />
      <ProductDetailsCard productName="Makaveli Jeans - Sahara" productPrice={productPrice} />
    </Box>
  );
};

export default ProductCardDetails;
