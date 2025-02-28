import ProductCardContainer from '../core/ProductCardContainer';
import Heading from '../core/Heading';
import ProductCardDetails from '../core/ProductCard/ProductCard';
import { Container } from '@mui/material';

type TProductCad = {
  headingText: string;
  productImg: string;
  productPrice: number;
};

const ProductCard = ({ headingText, productImg, productPrice }: TProductCad) => {
  return (
    <Container maxWidth="lg">
      <ProductCardContainer>
        <Heading headingText={headingText} />
        <ProductCardDetails productImg={productImg} productPrice={productPrice} />
      </ProductCardContainer>
    </Container>
  );
};

export default ProductCard;
