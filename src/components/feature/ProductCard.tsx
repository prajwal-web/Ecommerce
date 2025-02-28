import ProductCardContainer from '../core/ProductCardContainer';
import Heading from '../core/Heading';
import { Container } from '@mui/material';
import ProductCardAccumulator from '../core/ProductCard/ProductCardAccumulator';

// type TProductList = {
//   id: string;
//   availability: string;
//   category: string;
//   image: string;
//   largeDescription: string;
//   pricing: number;
//   quality: string;
//   ratingAndReviews: string
//   size: string
//   smallDescription: string
//   suitability: string
// };

type TProductCad = {
  headingText: string;
  productImg: string;
  productPrice: number;
  isCarousel?: boolean;
};

const ProductCard = ({ headingText, productImg, productPrice }: TProductCad) => {
  return (
    <Container maxWidth="lg">
      <ProductCardContainer>
        <Heading headingText={headingText} />
        <ProductCardAccumulator productImg={productImg} productPrice={productPrice} />
      </ProductCardContainer>
    </Container>
  );
};

export default ProductCard;
