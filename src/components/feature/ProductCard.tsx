import { Box, Typography, useMediaQuery } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../Contexts/MyContext';
import CoreButton from '../core/CoreButton';
import CarouselComponent from '../core/CarouselComponent';
import { TProductCard } from '../../types/product/ProductCard.types';

const ProductCard = ({ title, description, price, imageUrl, carouselBtn = true }: TProductCard) => {
  const { products } = useContext(MyContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width:600px)'); 

  useEffect(() => {
    if (products && products.length > 0) {
      setCurrentIndex(0);
    }
  }, [products]);

  const currentProduct = carouselBtn ? products[currentIndex] : { title, description, price, imageUrl };
  const productImage = currentProduct?.image?.product || imageUrl;

  return (
    <Box
      sx={{
        borderRadius: '4px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '16px',
        maxWidth: { xs: '100%', sm: '789px', md: '585px' },
        margin: '0 auto'
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, color: 'rgba(0, 0, 0, 1)' }}>
        {title}
      </Typography>

      <Box className="row" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: '20px' }}>
        <Box className="column" sx={{ flex: 1, display: 'flex', alignItems: 'center',marginBottom:10 }}>
          <img
            src={productImage}
            alt={currentProduct.smallDescription}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Box>

          
        <Box className="column" sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 2 }}>
          {carouselBtn ? (
            <Typography variant="body2" lineHeight={1.3} color="rgba(0, 0, 0, 1)">
              {isDesktop ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, veritatis quas, eum, deleniti quidem expedita laborum porro voluptatem quod voluptatum labore harum error. Molestias nisi eius obcaecati eaque sed quas doloribus ipsum ullam animi corrupti, rerum iusto atque totam iste." : currentProduct.smallDescription}
            </Typography>
          ) : (
            description && (
              <Typography variant="h3" lineHeight={1.3} color="rgba(0, 0, 0, 1)">
                {description}
              </Typography>
            )
          )}

          <Typography variant="body1" sx={{ lineHeight: 1.7 }} color="rgba(0, 0, 0, 1)">
            Rs. {carouselBtn ? currentProduct.pricing : currentProduct.price}
          </Typography>

          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            Shipping calculated at checkout.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <CoreButton text="Choose Options" />
            {carouselBtn && <CarouselComponent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;