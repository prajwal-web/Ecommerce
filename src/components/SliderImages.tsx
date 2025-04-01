import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

const SliderImages = () => {
  const productImages = [
    'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=1374&auto=format&fit=crop'
  ];
  return (
    <>
      <Carousel
        width={'250px'}
        showStatus={false}
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={3000}
        transitionTime={800}
      >
        {productImages.map((img, index) => (
          <Box key={index} sx={{ p: 1 }}>
            <Box
              component="img"
              src={img}
              alt={`Product Image ${index + 1}`}
              sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
            />
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default SliderImages;
