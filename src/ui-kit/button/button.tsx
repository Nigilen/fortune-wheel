import { FC } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ text, onClick, isDisabled }) => {
  return (
    <button className={styles.button} type='button' onClick={onClick} disabled={isDisabled}>
      <span className={cn(styles.button_text, "text-stroke")}>
        {isDisabled ? "😜🤞🏻" : text}
      </span>
    </button>
  );
};