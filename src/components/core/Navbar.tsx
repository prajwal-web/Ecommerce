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
          width: { xs: '50%', md: '35%' },
          display: 'flex',
          justifyContent: { xs: 'end' },
          alignItems: 'center',
          cursor: 'pointer'
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
          position: 'absolute',
          top: 10,
          right: 20,
          width: '100%'
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
