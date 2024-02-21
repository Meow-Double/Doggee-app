import { FC, HTMLProps, useState } from 'react';

import styles from '../Input/Input.module.css';

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
  isError?: boolean;
  helperText?: string;
}

export const PasswordInput: FC<InputProps> = ({
  isError = false,
  helperText,
  ...props
}) => {
  const [showPasword, setShowPassword] = useState(false);
  const className = isError ? styles.error : '';
  const showPasswordToggle = props.value;

  return (
    <div>
      <input
        className={`${styles.input} ${className}`}
        {...props}
        type={showPasswordToggle && showPasword ? 'text' : 'password'}
      />
      {isError && <div className={styles.helperText}>{helperText}</div>}
      {showPasswordToggle && (
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPasword ? 'show' : 'hide'}
        </button>
      )}
    </div>
  );
};
