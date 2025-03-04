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
        height: {xs: bgHeight ? bgHeight : 'auto', lg: bgHeight ? '616px' : 'auto'},
        background: `url(${src})`,
        backgroundSize: 'cover', 
        backgroundPosition: {xs: 'center', sm: 'center 20%'}
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundComponent;
