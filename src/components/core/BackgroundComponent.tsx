import { Box } from '@mui/material';
import { TBackgroundComponent } from '../../types/BackgroundComponent.types';

const BackgroundComponent = ({ src, bgHeight, children }: TBackgroundComponent) => {
  return (
    <Box
      component="div"
      sx={{
        width: {
          xs: '100vw',
          sm: '100vw',
          md: '100%'
        },
        height: bgHeight ? bgHeight : 'auto',
        background: `url(${src}) center center`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundComponent;
