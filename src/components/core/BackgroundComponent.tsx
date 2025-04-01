import { Box } from '@mui/material';
import { TBackgroundComponent } from '../../types/BackgroundComponent.types';

const BackgroundComponent = ({ src, children, bgHeight, showChildren = true }: TBackgroundComponent) => {
  return (
    <Box
      component="div"
      sx={{
        width: {
          xs: '100vw',
          sm: '100vw',
          md: 1198
        },
        height: {
          xs: bgHeight ? bgHeight : 'auto',
          sm: bgHeight ? bgHeight : 'auto',
          lg: bgHeight ? 'bgHeight' : '616PX'
        },
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: 'center', sm: 'center 20%' }
      }}
    >
      {showChildren && children}
    </Box>
  );
};

export default BackgroundComponent;

// import { Box } from '@mui/material';
// import { TBackgroundComponent } from '../../types/BackgroundComponent.types';

// const BackgroundComponent = ({ src, children, showChildren = true }: TBackgroundComponent) => {
//   return (

//     <Box
//       component="div"
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100vw',
//         height: '100vh', // Full screen height
//         backgroundImage: `url(${src})`,
//         backgroundPosition: 'center', // Ensures proper cropping
//         backgroundSize: 'cover', // Crops to fit screen
//         backgroundRepeat: 'no-repeat',

//       }}
//     >
//       {showChildren && children}
//     </Box>
//   );
// };

// export default BackgroundComponent;
