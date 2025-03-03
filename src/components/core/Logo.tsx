import { Box } from '@mui/material';

const Logo = () => {
  return (
    <Box
      component="img"
      src="https://res.cloudinary.com/dd8im2juc/image/upload/v1740543959/logo-zune_odse5p.svg"
      sx={{
        width: {
          xs: '56px',
          sm: '100px',
          cursor: 'pointer'
        }
      }}
      height="auto"
    ></Box>
  );
};

export default Logo;
