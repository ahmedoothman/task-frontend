import React, { useEffect, useRef } from 'react';
import styles from './duePanel.module.scss';
// i18n
import { useTranslation } from 'react-i18next';

// import time sand svg
import { ReactComponent as TimeSandIcon } from '../../assets/icons/time-sand.svg';
import { CustomButton } from '../UI/button/CustomButtonA';
import { QuizData } from '../../services/quizService';

const DuePanel: React.FC<{ data: QuizData[] }> = ({ data }) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles['header-inside']}>
        <h2>{t('Whats due')}</h2>
        <p>{t('ALL')}</p>
      </header>
      <section>
        {data.map((item) => (
          <div key={item._id} className={styles.item}>
            <div className={styles['person-info']}>
              <TimeSandIcon className={styles.icon} />
              <div>
                <p>{item.name}</p>
              </div>
            </div>
            <p>
              {t('course')} : {item.course}
            </p>
            <p>
              {t('topic')} : {item.topic}
            </p>
            <p>
              {t('DueTo')} : {new Date(item.dueTo).toLocaleDateString()}
            </p>
            <CustomButton
              title={t('start quiz')}
              style='secondary-outlined'
              onClickFunc={() => {}}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export { DuePanel };
