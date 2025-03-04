import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        padding: '10px',
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          width: { xs: '50%', md: '25%' },
          display: 'flex',
          justifyContent: { xs: 'end' },
          alignItems: 'center'
        }}
      >
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',  // Ensure it's positioned absolutely
    top: 10,               // Adjust position from the top
    right: 20,             // Aligns it to the right
    width: '100%'          // Ensure it spans the full width
  }}
>
  <Link to="productdisplay">
    <ShoppingCart color="purple" size="40px" />
  </Link>
</Box>

    </Container>
  );
};

export default Navbar;
