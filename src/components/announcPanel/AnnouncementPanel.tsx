import React, { useRef } from 'react';
import styles from './announcPanel.module.scss';
// import PersonIcon as svg
import { ReactComponent as PersonIcon } from '../../assets/icons/person.svg';
// i18n
import { useTranslation } from 'react-i18next';
interface IAnnouncementPanelProps {
  data: {
    _id: string;
    topic: string;
    author: string;
    content: string;
  }[];
}
const AnnouncementPanel: React.FC<IAnnouncementPanelProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles['header-inside']}>
        <h2>{t('Announcement')}</h2>
        <p>{t('ALL')}</p>
      </header>
      <section>
        {data.map((item) => (
          <div key={item._id} className={styles.item}>
            <div className={styles['person-info']}>
              <PersonIcon className={styles.icon} />
              <div>
                <p>{item.author}</p>
                <h3>{item.topic}</h3>
              </div>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export { AnnouncementPanel };
