import { FC, useRef, useState } from 'react';

import styles from '../input.module.css';
import { InputProps } from '../types';

export const PasswordInput: FC<InputProps> = ({
  isError = false,
  helperText,
  label,
  ...props
}) => {
  const className = isError ? styles.error : '';

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setFocus] = useState(!props.value ?? false);
  const [showPasword, setShowPassword] = useState(false);
  const showPasswordToggle = props.value;

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
          onBlur={() => !props.value && setFocus(false)}
          {...props}
          type={showPasswordToggle && showPasword ? 'text' : 'password'}
        />
      </div>
      {isError && <div className={styles.helperText}>{helperText}</div>}
      {showPasswordToggle && (
        <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
          {showPasword ? 'show' : 'hide'}
        </button>
      )}
    </>
  );
};

// export const PasswordInput: FC<InputProps> = ({
//   isError = false,
//   helperText,
//   ...props
// }) => {

//   return (
//     <div>
//       <input
//         className={`${styles.input} ${className}`}
//         {...props}

//       />
//       {isError && <div className={styles.helperText}>{helperText}</div>}

//     </div>
//   );
// };
