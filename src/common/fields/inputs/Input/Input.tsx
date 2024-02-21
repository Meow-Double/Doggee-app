import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
  isError?: boolean;
  helperText?: string;
}

export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  label,
  ...props
}) => {
  const className = isError ? styles.error : '';

  return (
    <div>
      <label htmlFor="" className="label">
        {label}
      </label>
      <input className={`${styles.input} ${className}`} type="text" {...props} />
      {isError && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};
