import React from 'react';

import styles from './index.module.scss';

import { DashHeader } from '../../../components/dashHeader/DashHeader';
import { AnnouncementPanel } from '../../../components/announcPanel/AnnouncementPanel';
import { DuePanel } from '../../../components/duePanel/DuePanel';
// services
import { getAllQuizes, QuizData } from '../../../services/quizService';

import {
  getAllAnnouncements,
  AnnouncementData,
} from '../../../services/announcService';
const DashboardPage: React.FC = () => {
  const [announcements, setAnnouncements] = React.useState<AnnouncementData[]>(
    []
  );
  const [quizes, setQuizes] = React.useState<QuizData[]>([]);
  React.useEffect(() => {
    (async () => {
      const response = await getAllAnnouncements();
      if (response.status === 'success') {
        setAnnouncements(response.data as AnnouncementData[]);
      }
      const quizResponse = await getAllQuizes();
      if (quizResponse.status === 'success') {
        console.log(quizResponse.data);
        setQuizes(quizResponse.data);
      }
    })();
  }, []);
  return (
    <div className={styles.container}>
      <header>
        <DashHeader />
      </header>
      <section>
        <AnnouncementPanel data={announcements} />
        <DuePanel data={quizes} />
      </section>
    </div>
  );
};

export default DashboardPage;
