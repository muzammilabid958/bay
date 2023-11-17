// material-ui
import { Box } from '@mui/material';
import BG_SA from 'assets/images/bg/BG_SA.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        overflow: 'hidden',
        height: '100vh', 
        width: '100vw',
      }}
    >
      <Box
        sx={{
          filter: 'blur(4px)',
          bottom: 50,
          // top: 10,
          right: -10,
          position: 'absolute',
          opacity: 1,
          width: '100%', 
          height: '100%', 
        }}
      >
        <img
          src={BG_SA}
          alt="bg logo"
          style={{
            width: '100%',
            height: '100%', 
          
          }}
        />
      </Box>
    </Box>
  );
};

export default AuthBackground;
