import { Box, Typography, useMediaQuery } from '@mui/material';
import CoreButton from '../CoreButton';

type TProductDetailsCard = { productName: string; productPrice: number };

const ProductCardDetails = ({ productName, productPrice }: TProductDetailsCard) => {
  const tablet = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '15px'
      }}
    >
      <Typography variant="h3" color="#080808" fontSize={{lg: '22px'}}>
        {productName}
      </Typography>
      <Typography variant="body1" color="#080808">
        Rs. {productPrice}
      </Typography>
      {tablet && (
        <Typography variant='body2' sx={{color: 'black', fontSize: {lg: '12px'}, opacity: .6}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eius ducimus recusandae nemo corporis?
          Amet et itaque odio eum ab harum animi deserunt consequuntur voluptate at neque, nemo adipisci similique!
          Consequatur aperiam voluptatem rem laudantium!
        </Typography>
      )}
      <Typography variant="body1" color="secondary" lineHeight={1.2}>
        Shipping calculated at checkout.
      </Typography>
      <CoreButton text="Choose Options" />
    </Box>
  );
};

export default ProductCardDetails;
