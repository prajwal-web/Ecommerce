import { Box, Container, Typography } from '@mui/material';

const FooterComponent = () => {
  return (
    <>
      <Container sx={{ height: 233, width: 334, borderTop: '2px solid white', backgroundColor: 'primary' }}>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h3" color="black" sx={{ lineHeight: 2 }}>
            Quick Links
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 2 }}>
            Returns and Exchanges
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 2 }}>
            Delivery Information
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 2 }}>
            FAQ
          </Typography>
        </Box>
        <hr />
        <Typography variant="body2" color="gray" textAlign="center">
          @ 2025 ZuneFit Inc. | All rights reserved
        </Typography>
      </Container>
    </>
  );
};

export default FooterComponent;
