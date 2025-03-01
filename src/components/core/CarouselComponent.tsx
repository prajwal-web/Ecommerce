import { Box, IconButton } from '@mui/material';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useContext } from 'react';
import { MyContext } from '../../Contexts/MyContext';

interface CarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselComponent = ({ currentIndex, setCurrentIndex }: CarouselProps) => {
  console.log(currentIndex);
  
  const { products } = useContext(MyContext); 

  const handleNext = () => {
    if(currentIndex<products.length){
      setCurrentIndex((prevIndex) => prevIndex < products.length - 1 ? prevIndex + 1 : 0);
    }
  };

  const handlePrevious = () => {
    if(currentIndex>0){
      setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : products.length - 1);
    }
    
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
      <IconButton
        onClick={handlePrevious}
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