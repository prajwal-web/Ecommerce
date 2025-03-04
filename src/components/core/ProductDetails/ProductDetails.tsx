import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import HalfRating from '../../../mui/HalfRating';
import { jeanSize } from '../../../constants/uiConstants';
import { CheckCircle2 } from 'lucide-react';

const ProductDetails = () => {
  const [sizeMatch, setSizeMatch] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading] = useState(false);
  const [pincode, setPincode] = useState('');
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 0.8, mt: 2 }}>
        <Typography variant="h3" color="#080808" fontSize={{ lg: '22px' }}>
          Makaveli Jeans - Sahara
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" color="#080808">
            {'Rs. 2,484.63'}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HalfRating />
            <Typography variant="body2" color="#080808">
              {3.2}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Typography variant="body1" color="#080808">
            {'Size'}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.1 }}>
            {jeanSize.map((size) => (
              <Typography
                key={size}
                variant="subtitle2"
                sx={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: sizeMatch === size ? '#6fa3c7' : 'transparent'
                }}
                onClick={() => setSizeMatch(size)}
              >
                {size}
              </Typography>
            ))}
          </Box>
        </Box>
        {!isAdded && (
          <Box sx={{ display: 'flex', alignItems: 'center', pr: 8 }}>
            <Typography variant="body1" color="#080808" sx={{ flex: 1 }}>
              Check pincode
            </Typography>
            <TextField
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              size="small"
              type="number"
              sx={{ flex: 1 }}
            />
          </Box>
        )}
        {isAdded && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" color="#61B700" sx={{ flex: 2 }}>
              Delivery in two days
            </Typography>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: .5 }}>
              <Typography variant="body1" color="#080808" sx={{ flex: 1 }}>
                {pincode}
              </Typography>
              <Typography variant="body2" color="#6FA3C7" sx={{ flex: 0.2, cursor: 'pointer' }}>
                {'change'}
              </Typography>
            </Box>
          </Box>
        )}
        <Button
          loading={isLoading}
          onClick={() => {
            if (pincode.length > 4) {
              setIsAdded(true);
              // setIsLoading(true);
              setTimeout(() => {
                setIsAdded(false);
                // setIsLoading(false);
              }, 2000);
            }
          }}
          startIcon={isAdded && <CheckCircle2 />}
          sx={{ bgcolor: !isAdded ? '#1e3a5f' : '#34C759', color: 'white', mt: 2 }}
        >
          Add to Cart
        </Button>
      </Box>
    </>
  );
};

export default ProductDetails;
