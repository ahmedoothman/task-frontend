import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const PerformancePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Performance Page</p>
    </div>
  );
};

export default PerformancePage;
