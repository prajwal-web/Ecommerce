import { Box } from '@mui/material';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

type TSetTranslateX = {
  setTranslateX: Dispatch<SetStateAction<number>>;
  boxWidth: number;
};

const ProductCarousel = ({ setTranslateX, boxWidth }: TSetTranslateX) => {
  const { products } = useContext(ProductContext);
  const [index, setIndex] = useState(0);
  console.log(index);
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
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => (prev = prev - 1));
            setTranslateX((prev) => prev + boxWidth);
          }
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
        onClick={() => {
          if (index < products.length - 1) {
            setIndex((prev) => (prev = prev + 1));
            setTranslateX((prev) => prev - boxWidth);
          }
        }}
      >
        <MoveRightIcon color="#000000" size={25} />
      </Box>
    </Box>
  );
};

export default ProductCarousel;
