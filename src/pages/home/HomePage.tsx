import React from 'react';
// router
import { useNavigate } from 'react-router-dom';
// styles
import styles from './homePage.module.scss';
// i18n
import { useTranslation } from 'react-i18next';
// js-cookie
import Cookies from 'js-cookie';
//Components
import { CustomButton } from '../../components/UI/button/CustomButtonA';
import { LangBox } from '../../components/UI/langBox/LangBox';
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  //   login function
  const loginHandler = () => {
    // implement login logic
    // but for now, just set loggedIn cookie to true for 1 day
    Cookies.set('loggedIn', 'true', { expires: 1 });
    navigate('/dashboard/dashboardPage');
  };
  return (
    <div className={styles['container']}>
      <div className={styles['change-lang']}>
        <LangBox />
      </div>
      <h1>{t('welcomeMessage')}</h1>
      <p>{t('appDescription')}</p>
      <CustomButton
        title={t('login')}
        style='secondary-filled'
        onClickFunc={loginHandler}
      />
    </div>
  );
};

export default HomePage;
