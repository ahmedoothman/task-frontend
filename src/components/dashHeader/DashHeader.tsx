import React, { useRef } from 'react';
import styles from './dashHeader.module.scss';
// i18n
import { useTranslation } from 'react-i18next';
// components
import { CustomButton } from '../UI/button/CustomButtonA';
import { ReactComponent as LaptopIcon } from '../../assets/icons/laptop.svg';
const DashHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{t('ExamsTime')}</h1>
        <p>{t('description')}</p>
        <span>{t('headerQoute')}</span>
        <CustomButton
          title={t('viewExamsTips')}
          style='secondary-filled'
          onClickFunc={() => {}}
        />
      </div>
      <div className={styles.img}>
        <LaptopIcon className={styles.icon} />
      </div>
    </div>
  );
};

export { DashHeader };
