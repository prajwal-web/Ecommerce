import { Box, Container, Typography, useMediaQuery } from '@mui/material';

const FooterComponent = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Container
      sx={{
        width: { xs: 394, sm: 766, md: 1198 },
        borderTop: '2px solid white',
        backgroundColor: '#fff',
        position: 'relative',
        marginTop: '1px'
      }}
    >
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <Box
          display="flex"
          flexDirection="column"
          sx={{ gap: '8px', marginLeft: 10, cursor: 'pointer', display: isDesktop ? 'block' : 'none' }}
        >
          <Typography variant="h3" color="black" sx={{ lineHeight: 1.5 }}>
            Quick Links
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Returns and Exchanges
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Delivery Information
          </Typography>
          <Typography variant="body1" color="black" sx={{ lineHeight: 1.5 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="black" sx={{ lineHeight: 1.5 }}>
            FAQ
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{ gap: '8px', marginRight: 20, cursor: 'pointer', display: isDesktop ? 'block' : 'none' }}
        >
          <Typography variant="h3" color="black" sx={{ lineHeight: 1.5 }}>
            Address
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            84, MG Road,
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Karnataka,
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Bangalore,
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Post Code : 560073
          </Typography>
        </Box>
      </Box>

      {!isDesktop && (
        <Box display="flex" flexDirection="column" gap="10px" sx={{ marginTop: '10px' }}>
          <Typography variant="h3" color="black" sx={{ lineHeight: 1.5 }}>
            Quick Links
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Returns and Exchanges
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            Delivery Information
          </Typography>
          <Typography variant="body2" color="black" sx={{ lineHeight: 1.5 }}>
            FAQ
          </Typography>
        </Box>
      )}

      <hr />

      <Typography variant="body2" color="gray" textAlign="center">
        @ 2025 ZuneFit Inc. | All rights reserved
      </Typography>
    </Container>
  );
};

export default FooterComponent;
