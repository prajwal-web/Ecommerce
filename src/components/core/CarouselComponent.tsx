import { Box, IconButton } from '@mui/material';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useContext } from 'react';
import { MyContext } from '../../Contexts/MyContext';
import '../../styles/index.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselComponent = ({ currentIndex, setCurrentIndex }: any) => {
  console.log(currentIndex);
  const { products } = useContext(MyContext);

  const handleNext = () => {
    if (currentIndex <= products.length) {
      setCurrentIndex((prevIndex: number) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1));
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
      <IconButton
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        sx={{
          color: 'black',
          backgroundColor: 'white',
          border: '2px solid black',
          marginRight: 5
        }}
      >
        <MoveLeft />
      </IconButton>

      <IconButton
        disabled={currentIndex === products.length - 1}
        onClick={handleNext}
        sx={{
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
