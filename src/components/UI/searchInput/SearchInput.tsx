import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
// styles
import styles from './searchInput.module.scss';
// import seacrIcon as svg
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
// i18n
import { useTranslation } from 'react-i18next';
import { SearchInputRef } from '../../../types/customTypes';
// how to specifiy  the type of ref and props
interface SearchInputProps {
  searchHandler: () => void;
}

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(
  (props, ref) => {
    const { t } = useTranslation();

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      getValue: () => {
        return inputRef.current!.value;
      },
    }));
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      props.searchHandler();
    };
    return (
      <form
        className={styles['container']}
        onSubmit={submitHandler}
        ref={formRef}
      >
        <SearchIcon
          className={styles.icon}
          onClick={() => {
            // submit the form and call submitHandler
            formRef.current?.dispatchEvent(
              new Event('submit', { cancelable: true, bubbles: true })
            );
          }}
        />
        <input
          type='text'
          placeholder={t('search')}
          className={styles['search-input']}
          ref={inputRef}
        />
      </form>
    );
  }
);

export { SearchInput };
