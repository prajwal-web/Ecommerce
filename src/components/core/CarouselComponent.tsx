import { Box, IconButton } from '@mui/material';
import { MoveLeft, MoveRight } from 'lucide-react';

const CarouselComponent = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
      <IconButton
        sx={{
          transform: 'translateY(-50%)',
          color: 'black',
          backgroundColor: 'white',
          border: '2px solid black',
          marginLeft: 5
        }}
      >
        <MoveLeft />
      </IconButton>
      <IconButton
        sx={{
          transform: 'translateY(-50%)',
          color: 'black',
          backgroundColor: 'white',
          border: '2px solid black',
          marginLeft: 5
        }}
      >
        <MoveRight />
      </IconButton>
    </Box>
  );
};

export default CarouselComponent;
