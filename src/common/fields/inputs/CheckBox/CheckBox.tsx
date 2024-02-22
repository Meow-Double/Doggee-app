import { FC } from 'react';

import { InputProps } from '../types';

import styles from './CheckBox.module.css';

export const CheckBox: FC<InputProps> = ({ label, ...props }) => {
  return (
    <label className={styles.labelContainer}>
      <input
        className={styles.input}
        type="checkbox"
        checked={props.checked}
        {...props}
      />
      <span className={styles.checkbox} />
      <span className={styles.text}>{label}</span>
    </label>
  );
};
