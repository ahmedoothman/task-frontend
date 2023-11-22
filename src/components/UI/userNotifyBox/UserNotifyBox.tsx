import React from 'react';
import styles from './userNotifyBox.module.scss';
import Cookies from 'js-cookie';
// router
import { useNavigate } from 'react-router-dom';
// mail icon svg as
import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';
// bell icon svg as
import { ReactComponent as BellIcon } from '../../../assets/icons/bell.svg';
// person icon svg as
import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
// i18n
import { useTranslation } from 'react-i18next';
// bell icon
interface UserNotifyBoxProps {
  messages: string[];
  notifications: string[];
}

const UserNotifyBox: React.FC<UserNotifyBoxProps> = ({
  messages,
  notifications,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  //   logOutHandler
  const logOutHandler = () => {
    // implement logout logic
    // but for now, just set loggedIn cookie to false
    Cookies.set('loggedIn', 'false');
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <div>
        <MailIcon className={styles.icon} />
        <span>{messages.length}</span>
      </div>
      <div>
        <BellIcon className={styles.icon} />
        <span>{notifications.length}</span>
      </div>
      <div>
        <PersonIcon className={styles.icon} />

        <p onClick={logOutHandler}>{t('Logout')}</p>
      </div>
    </div>
  );
};

export { UserNotifyBox };
