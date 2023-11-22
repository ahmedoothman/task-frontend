import React from 'react';
import styles from './topNav.module.scss';
import { LangBox } from '../UI/langBox/LangBox';
// mui
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// constants
import { gradients } from '../../constants/styles';
const TopNav: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* change color to #345435 */}

      {/* <AppBar position='static' color='secondary'> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ background: gradients.secondary }}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Coligo
            </Typography>
            <LangBox />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export { TopNav };
