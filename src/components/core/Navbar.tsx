import { Box, Container } from '@mui/material';
import { Link } from 'react-router';
import Logo from './Logo';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: '2%', zIndex: 999 }}
    >
      <Box
        sx={{ width: { xs: '50%', md: '15%' }, display: 'flex', justifyContent: { xs: 'end' }, alignItems: 'center' }}
      >
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box sx={{ mr: { sm: 3 }, cursor: 'pointer' }}>
        <Link to="/products">
          <ShoppingCart color="black" />
        </Link>
      </Box>
    </Container>
  );
};

export default Navbar;
