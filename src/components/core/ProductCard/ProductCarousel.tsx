import { Box } from '@mui/material';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';

const ProductCarousel = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 2, pr: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          border: '1px solid #D0D0D0',
          borderRadius: '50%',
          px: '10px',
          py: '10px',
          cursor: 'pointer'
        }}
      >
        <MoveLeftIcon color="#D0D0D0" size={25} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          border: '1px solid #000000',
          borderRadius: '50%',
          px: '10px',
          py: '10px',
          cursor: 'pointer'
        }}
      >
        <MoveRightIcon color="#000000" size={25} />
      </Box>
    </Box>
  );
};

export default ProductCarousel;
