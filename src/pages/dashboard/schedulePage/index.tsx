import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const SchedulePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Schedule Page</p>
    </div>
  );
};

export default SchedulePage;
