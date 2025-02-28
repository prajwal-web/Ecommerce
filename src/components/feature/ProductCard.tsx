import { Box, Typography } from '@mui/material';
import { TProductCard } from '../../types/product/ProductCard.types';
import CoreButton from '../core/CoreButton';

const ProductCard = ({ title, description, price, imageUrl }: TProductCard) => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
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
            {description && (
              <Typography variant="h4" lineHeight={1.3}>
                {description}
              </Typography>
            )}
            <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
              Rs. {price}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
              Shipping calculated at checkout.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                position: 'absolute',
                lineHeight: 1.5
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
