import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const AnnouncementPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Announcement Page</p>
    </div>
  );
};

export default AnnouncementPage;
