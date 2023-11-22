import React, { useEffect, useState } from 'react';
// styles
import styles from './customButton.module.scss';

type ClassList =
  | 'primary-filled'
  | 'secondary-filled'
  | 'tertiary-filled'
  | 'white-filled'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'tertiary-outlined'
  | 'white-outlined';

interface CustomButtonProps {
  title: string;
  style: ClassList;
  onClickFunc: (param?: any) => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  onClickFunc,
}) => {
  const [classSelected, setClassSelected] = useState<ClassList>(
    style ? style : 'primary-filled'
  );
  // useEffect
  useEffect(() => {}, []);
  // onClickHandler
  const onClickHandler = () => {
    onClickFunc();
  };
  return (
    <button className={`${styles[classSelected]}`} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export { CustomButton };
