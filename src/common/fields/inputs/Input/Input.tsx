import { FC, HTMLProps } from 'react';

import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  const className = isError ? styles.error : '';

  return (
    <>
      <input className={`${styles.input} ${className}`} type="text" {...props} />
      {isError && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
