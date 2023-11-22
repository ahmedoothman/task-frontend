import React, { useRef } from 'react';
import styles from './announcPanel.module.scss';
// import PersonIcon as svg
import { ReactComponent as PersonIcon } from '../../assets/icons/person.svg';
import { AnnouncementData } from '../../services/announcService';
// i18n
import { useTranslation } from 'react-i18next';

const AnnouncementPanel: React.FC<{
  data: AnnouncementData[];
}> = ({ data }) => {
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
            <p className={styles.content}>{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export { AnnouncementPanel };
