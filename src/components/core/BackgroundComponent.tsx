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
