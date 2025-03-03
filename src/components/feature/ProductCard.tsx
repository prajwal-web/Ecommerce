import ProductCardContainer from '../core/ProductCardContainer';
import Heading from '../core/Heading';
import ProductCardAccumulator from '../core/ProductCard/ProductCardAccumulator';

type TProductCad = {
  headingText: string;
  productImg: string;
  productPrice: number;
  isCarousel?: boolean;
};

const ProductCard = ({ headingText, productImg, productPrice }: TProductCad) => {
  return (
    <ProductCardContainer>
      <Heading headingText={headingText} />
      <ProductCardAccumulator productImg={productImg} productPrice={productPrice} />
    </ProductCardContainer>
  );
};

export default ProductCard;
