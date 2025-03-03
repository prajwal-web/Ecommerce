import { Box } from '@mui/material';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

type TSetTranslateX = {
  setTranslateX: Dispatch<SetStateAction<number>>;
  boxWidth: number;
};

const ProductCarousel = ({ setTranslateX, boxWidth }: TSetTranslateX) => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // console.log(windowWidth);
  const { products } = useContext(ProductContext);
  const [index, setIndex] = useState(0);
  return (
    <Box
      sx={{
        // width: '100%',
        display: { xs: 'flex' },
        alignItems: 'center',
        justifyContent: { xs: 'end', lg: 'space-between' },
        gap: 2,
        pr: 3,
        mt: 4
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          border: `1px solid ${index === 0 ? '#d3d3d3' : '#000000'}`,
          borderRadius: '50%',
          px: '10px',
          py: '10px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => (prev = prev - 1));
            setTranslateX((prev) => prev + boxWidth);
          }
        }}
      >
        <MoveLeftIcon color={index === 0 ? '#d3d3d3' : '#000000'} size={25} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          border: `1px solid ${index === products.length - 1 ? '#d3d3d3' : '#000000'}`,
          borderRadius: '50%',
          px: '10px',
          py: '10px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (index < products.length - 1) {
            setIndex((prev) => (prev = prev + 1));
            setTranslateX((prev) => prev - boxWidth);
          }
        }}
      >
        <MoveRightIcon color={index === products.length - 1 ? '#d3d3d3' : '#000000'} size={25} />
      </Box>
    </Box>
  );
};

export default ProductCarousel;
