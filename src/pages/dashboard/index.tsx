import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
// components
import { SideNav } from '../../components/sideNav/SideNav';
import { TopBar } from '../../components/topBar/TopBar';
import { TopNav } from '../../components/topNav/TopNav';

import { MOBILE_VIEW_WIDTH } from '../../constants/styles';
const DashboardBase: React.FC = () => {
  // create a state that true for mobile and false for desktop
  const [isMobile, setIsMobile] = React.useState(false);
  // create a function that will be called when the screen size changes
  const handleWindowSizeChange = () => {
    // check if the screen is less than 600px wide
    setIsMobile(window.innerWidth < MOBILE_VIEW_WIDTH);
  };
  // register the event listener
  useEffect(() => {
    const isMobile = window.innerWidth < MOBILE_VIEW_WIDTH;
    setIsMobile(isMobile);

    window.addEventListener('resize', handleWindowSizeChange);
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);
  return (
    <div className={styles.container}>
      {!isMobile && <SideNav />}
      <section className={styles.content}>
        <header className={styles.header}>
          {isMobile && <TopNav />}
          <TopBar />
        </header>
        <section className={styles.main}>
          <Outlet />
        </section>
      </section>
    </div>
  );
};

export default DashboardBase;
