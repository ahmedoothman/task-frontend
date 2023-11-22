import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const CoursePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Course Page</p>
    </div>
  );
};

export default CoursePage;
