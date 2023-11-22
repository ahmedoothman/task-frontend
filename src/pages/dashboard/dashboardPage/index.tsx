import React from 'react';

import styles from './index.module.scss';

import { DashHeader } from '../../../components/dashHeader/DashHeader';
import { AnnouncementPanel } from '../../../components/announcPanel/AnnouncementPanel';
import { DuePanel } from '../../../components/duePanel/DuePanel';
const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <DashHeader />
      </header>
      <section>
        <AnnouncementPanel
          data={[
            {
              _id: '1',
              topic: 'Math 101',
              author: 'John Doe',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?',
            },
          ]}
        />
        <DuePanel
          data={[
            {
              _id: '1',
              name: 'Lesson 2 Quiz',
              course: 'Physics 02',
              topic: 'motion and forces',
              dueTo: '2023-01-09T22:00:00.000Z',
            },
          ]}
        />
      </section>
    </div>
  );
};

export default DashboardPage;
