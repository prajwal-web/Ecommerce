import { Typography, Box } from '@mui/material';
import { TMarketingComponent } from '../../types/MarketingComponent.types';
import theme from '../../theme';

const MarketingComponent = ({
  text,
  type = 'main_ghp',
  backgroundColor = theme.palette.secondary.main
}: TMarketingComponent) => {
  return type === 'main_ghp' ? (
    <Box
      sx={{
        background: backgroundColor,
        padding: {
          xs: '24px 12px',
          sm: '60px 30px'
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: {
            xs: '180px',
            sm: '360px'
          },
          fontSize: {
            sm: '24px'
          },
          textAlign: 'center',
          color: 'white'
        }}
      >
        {text}
      </Typography>
    </Box>
  ) : null;
};

export default MarketingComponent;
