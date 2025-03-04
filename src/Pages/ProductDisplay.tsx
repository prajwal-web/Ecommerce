import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

const ProductDisplay = () => {
  const [btnTxt, setBtnTxt] = useState(' Add to Cart');
  const [isBool, setIsBool] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeEntered, setPincodeEntered] = useState('');

  const reviews = [
    {
      review: 'Great fit, Cool designs!!.',
      color: '#4CAF50'
    },
    {
      review: "It's good, but takes a long time to deliver.",
      color: '#FFC107'
    },
    {
      review: 'Great fit, Cool designs!!.',
      color: '#FFC107'
    },
    {
      review: 'Awesome product for GenZ.',
      color: '#4CAF50'
    }
  ];

  const handleButtonClick = () => {
    if (pincode.length > 4 && pincode.length <= 8) {
      setBtnTxt('Added');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setPincodeEntered(pincode);
      setIsBool(false);
      setPincode('');
      setTimeout(() => {
        setIsBool(true);
        setBtnTxt('Add to Cart');
      }, 3000);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        padding: { xs: 2, sm: 3, md: 4 },
        borderRadius: 2,
        marginTop: { xs: 5, sm: 8, md: 8 }
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          component="img"
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F45%2F24458b4ee703c2ef5899c2586da0f442ca2e0a1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          alt="Makaveli Jeans - Sahara"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: 250,
            height: 'auto',
            borderRadius: 1
          }}
        />
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h3" color="black">
          Makaveli Jeans - Sahara
        </Typography>
        <Box display="flex" gap={10} sx={{ alignItems: 'center' }}>
          <Typography variant="body1" color="black" mt={1}>
            ₹2,484.63
          </Typography>
          <Box display="flex">
            <Rating name="simple-controlled" value={3.2} />
            <Typography variant="body1" color="black" sx={{ ml: 1 }}>
              3.2
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          gap={7}
          justifyContent={{ xs: 'flex-start', md: 'flex-start', sm: 'flex-start' }}
          alignItems="center"
        >
          <Typography variant="body1" color="black" mt={2}>
            Sizes
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center', height: '28px' }}>
            {['28', '30', '32', '34', '36'].map((size) => (
              <Box
                key={size}
                component="span"
                sx={{
                  background: '#fff',
                  borderRadius: '50%',
                  px: 1,
                  color: 'black',
                  cursor: 'pointer',
                  fontSize: { xs: '12px', sm: '14px' }
                }}
              >
                {size}
              </Box>
            ))}
          </Box>
        </Box>

        {isBool && (
          <Box
            sx={{ mt: 2, gap: 7 }}
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start', sm: 'flex-start' }}
            alignItems="center"
          >
            <Typography variant="body1" color="black">
              Check pincode
            </Typography>
            <TextField
              onChange={(e) => setPincode(e.target.value)}
              sx={{ width: { xs: '146px', sm: '200px', md: '250px', color: 'black' } }}
            />
          </Box>
        )}

        {!isBool && (
          <Box
            sx={{ mt: 2, gap: 7 }}
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start', sm: 'flex-start' }}
            alignItems="center"
          >
            <Typography variant="body1" color="#4CAF50">
              Delivery in two days
            </Typography>
            <Typography variant="body1" color="black">
              {pincodeEntered}
            </Typography>
          </Box>
        )}

        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            loading={loading}
            color={!isBool ? 'success' : 'primary'}
            onClick={handleButtonClick}
            startIcon={!isBool && <CheckCircleOutlineIcon />}
            fullWidth
          >
            {btnTxt}
          </Button>
        </Box>

        <Typography variant="h4" mt={3} color="black">
          Description
        </Typography>
        <Box sx={{ pl: 3, mt: 1, color: 'black' }}>
          <Typography variant="body2" mt={1}>
            Loose fit
          </Typography>
          <Typography variant="body2" mt={1}>
            Wide Leg Fit
          </Typography>
          <Typography variant="body2" mt={1}>
            Fashion printed design
          </Typography>
          <Typography variant="body2" mt={1}>
            Available in multiple sizes
          </Typography>
        </Box>
      </Box>

      <Typography variant="h4" mt={3} color="black">
        Reviews
      </Typography>

      <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'column' }} sx={{ mt: 2 }}>
        {reviews.map((item, index) => (
          <Box key={index} display="flex" gap={2} flexDirection={{ xs: 'row', sm: 'row' }}>
            <Typography
              variant="body2"
              color="black"
              sx={{
                height: { xs: 35, sm: 40 },
                width: { xs: 35, sm: 40 },
                borderRadius: '50%',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              3.2
            </Typography>
            <Typography variant="body2" color="black">
              {item.review}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductDisplay;
