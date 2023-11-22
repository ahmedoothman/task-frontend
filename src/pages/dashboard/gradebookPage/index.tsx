import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const GradebookPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Gradebook Page</p>
    </div>
  );
};

export default GradebookPage;
