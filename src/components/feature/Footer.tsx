import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', mt: 5, borderBottom: '2px solid #dadada', pb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
          <Typography variant="h3" color="black">
            Quick Links
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }}>
            Returns and Exchanges
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }}>
            Delivery Information
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }}>
            FAQ
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }}>
            Contact Us
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 3, flex: 1 }}>
          <Typography variant="h3" color="black">
            Address
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }} width={'45%'}>
            57, Wason Street 84, Kalpana Chowk, Hyderabad, Telangana,
          </Typography>
          <Typography variant="body1" color="black" fontSize={{ xs: '15px' }}>
            Post Code : 180785
          </Typography>
        </Box>
      </Box>
      <Box sx={{textAlign: 'center', py: 2}}>
        <Typography variant='body2' color='#9f9c9c'>@ 2025 ZuneFit Inc. | All rights reserved</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
