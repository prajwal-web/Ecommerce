import { Box, Typography } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from "../../Contexts/MyContext";
import CoreButton from '../core/CoreButton';
import CarouselComponent from '../core/CarouselComponent';
import { TProductCard } from '../../types/product/ProductCard.types';

const ProductCard = ({ title, description, price, imageUrl, carouselBtn = true }: TProductCard) => {
  const { products } = useContext(MyContext); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      setCurrentIndex(0);
    }
  }, [products]);

  const currentProduct = carouselBtn
    ? products[currentIndex] 
    : { title, description, price, imageUrl };

  return (
    <Box
      sx={{
        borderRadius: '4px',
        maxWidth: { xs: '100%' },
        backgroundColor: '#fff',
        padding: '16px'
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, color: 'black' }}>
        { title}
      </Typography>

      <Box display="flex" flexDirection="row">
        <Box
          component="img"
          src={imageUrl}
          alt={ title}
          sx={{
            height: 215,
            width: 172,
            marginRight: 1
          }}
        />
        <Box>
          {carouselBtn ? (
            <Typography variant="h3" lineHeight={1.3} color="black">
              {currentProduct.smallDescription}
            </Typography>
          ) : (
            description && (
              <Typography variant="h3" lineHeight={1.3} color="black">
                {description}
              </Typography>
            )
          )}
          <Typography variant="body1" sx={{ lineHeight: 1.5 }} color="black">
            Rs. {carouselBtn ? currentProduct.pricing : currentProduct.price}
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            Shipping calculated at checkout.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CoreButton text="Choose Options" />
            {carouselBtn && (
              <CarouselComponent
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;