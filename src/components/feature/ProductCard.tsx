import { Box, Typography, useMediaQuery } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../Contexts/MyContext';
import CoreButton from '../core/CoreButton';
import CarouselComponent from '../core/CarouselComponent';
import { TProductCard } from '../../types/product/ProductCard.types';

const ProductCard = ({ title, description, price, imageUrl, carouselBtn = true }: TProductCard) => {
  const { products } = useContext(MyContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDesktop = useMediaQuery('(min-width:600px)'); // For desktop (larger screens)
  const isSmallMobile = useMediaQuery('(max-width:375px)'); // For small mobile screens like 375px width

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
        maxWidth: { xs: '100%', sm: '789px', md: '585px' }, // Max width for larger sizes
        margin: '0 auto' // Centering the product card
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, color: 'rgba(0, 0, 0, 1)' }}>
        {title}
      </Typography>

      {/* Adjust the layout based on screen size */}
      <Box
        display="flex"
        flexDirection={isSmallMobile ? 'column' : 'row'} // Stack on small mobile, row on larger screens
        gap={2}
        justifyContent="space-between"
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: '4px',
            maxWidth: isDesktop ? '400px' : '100%', // Larger image for desktop, take full width on smaller screens
            height: isDesktop ? 'auto' : '200px' // Set a fixed height for smaller screens
          }}
        >
          <img
            src={productImage}
            alt={currentProduct.smallDescription}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'none'
            }}
          />
        </Box>

        {/* Product Details Section */}
        <Box
          sx={{
            flex: 2, // Product details take up more space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 2
          }}
        >
          {carouselBtn ? (
            <Typography variant="body2" lineHeight={1.3} color="rgba(0, 0, 0, 1)">
              {isDesktop
                ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis corporis dolorem voluptates totam commodi est non in tempore, optio cum architecto eius! Omnis ea ullam quidem laudantium mollitia delectus illum animi sint provident. Fuga, aspernatur. Neque modi odit harum et quos saepe beatae dignissimos nam impedit corporis, voluptatum optio facilis sint vero error fugit itaque eius hic quae enim!'
                : currentProduct.smallDescription}
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
