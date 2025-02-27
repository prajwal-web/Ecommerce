import { Box, Typography } from '@mui/material';
import { TProductCard } from '../../types/product/ProductCard.types';
import CoreButton from '../core/CoreButton';

const ProductCard = ({ title, description, price, imageUrl }: TProductCard) => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        overflow: 'hidden',
        maxWidth: {
          xs: '100%'
        },
        backgroundColor: '#fff'
      }}
    >
      <Box sx={{ padding: '16px' }}>
        <Typography variant="h3" sx={{ mb: 1, color: 'black' }}>
          {title}
        </Typography>
        <Box display="flex" flexDirection="row">
          <Box
            component="img"
            src={imageUrl}
            alt={title}
            sx={{
              height: 215,
              width: 172
            }}
          />
          <Box>
            {description && <Typography variant="h4">{description}</Typography>}
            <Typography variant="body1">Rs. {price}</Typography>

            <Typography variant="body1">Shipping calculated at checkout.</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                position: 'absolute'
              }}
            >
              <CoreButton text="Choose Options" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
