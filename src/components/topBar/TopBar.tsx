import React, { useRef } from 'react';
import styles from './topBar.module.scss';
// i18n
import { useTranslation } from 'react-i18next';
import { SearchInput } from '../UI/searchInput/SearchInput';
import { UserNotifyBox } from '../UI/userNotifyBox/UserNotifyBox';
import { SearchInputRef } from '../../types/customTypes';
const TopBar: React.FC = () => {
  const { t } = useTranslation();
  const inputRef = useRef<SearchInputRef>(null);
  //   searchHandler is a function that will be called when the user clicks on the search icon
  const searchHandler = () => {
    // implement search logic
    // ...
    // for now, just log the value of the input
    console.log('searching...');
    console.log(inputRef.current?.getValue());
  };
  return (
    <div className={styles.container}>
      <div className={styles['welcome-message']}>{t('Welcome')}, Talia</div>
      <div>
        <SearchInput ref={inputRef} searchHandler={searchHandler} />
      </div>
      <div>
        <UserNotifyBox messages={[]} notifications={[]} />
      </div>
    </div>
  );
};

export { TopBar };
