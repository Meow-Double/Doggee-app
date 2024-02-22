import { FC, useRef, useState } from 'react';

import styles from '../input.module.css';
import { InputProps } from '../types';

export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  label,
  ...props
}) => {
  const className = isError ? styles.error : '';

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setFocus] = useState(!props.value ?? false);

  return (
    <>
      <div
        className={`${styles.inputContainer} ${className} ${isFocus ? styles.focused : ''}`}
        onClick={() => {
          inputRef.current?.focus(), setFocus(true);
        }}
      >
        <label htmlFor="" className={styles.inputLabel}>
          {label}
        </label>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          onBlur={() => !props.value && setFocus(false)}
          {...props}
        />
      </div>
      {isError && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
