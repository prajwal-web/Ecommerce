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
          width: { xs: '50%', md: '15%' },
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
          marginLeft: 'auto',
          width: {
            xs: '24px',
            sm: '40px',
            cursor: 'pointer'
          }
        }}
      >
        <Link to="productdisplay">
          <ShoppingCart color="purple" size="30px" />
        </Link>
      </Box>
    </Container>
  );
};

export default Navbar;
