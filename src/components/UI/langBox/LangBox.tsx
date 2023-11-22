import React, { useState } from 'react';
// styles
import styles from './langBox.module.scss';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../../store/main-slice';
// i18n
import { useTranslation } from 'react-i18next';
const LangBox: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lang = useSelector((state: any) => state.mainSlice.lang);

  const changeLanguageHandler = () => {
    if (lang === 'en') {
      dispatch(mainActions.setLang('fr'));
    } else {
      dispatch(mainActions.setLang('en'));
    }
  };
  return (
    <div className={styles['change-lang']}>
      <p>{t('language')}</p>
      {lang === 'en' ? ( // if english
        <button onClick={changeLanguageHandler}>fr</button>
      ) : (
        // if french
        <button onClick={changeLanguageHandler}>en</button>
      )}
    </div>
  );
};

export { LangBox };
