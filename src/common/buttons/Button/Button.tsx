import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<PropsWithChildren> {
  isLoading: boolean;
}

export const Button: FC<ButtonProps> = ({ children, isLoading }) => {
  return (
    <button type="button" className={styles.button}>
      {!isLoading && children}
      {isLoading && <div className={styles['dot-flashing']} />}
    </button>
  );
};
