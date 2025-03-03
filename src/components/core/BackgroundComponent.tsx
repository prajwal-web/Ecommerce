import { Box } from '@mui/material';
import { TBackgroundComponent } from '../../types/BackgroundComponent.types';

const BackgroundComponent = ({ src, children, showChildren = true }: TBackgroundComponent) => {
  return (
    <Box
      component="div"
      sx={{
        width: {
          xs: '100vw',
          sm: '100vw',
          md: 1198
        },
        background: `url(${src}) center center`,
        backgroundSize: 'cover'
      }}
    >
      {showChildren && children}
    </Box>
  );
};

export default BackgroundComponent;
