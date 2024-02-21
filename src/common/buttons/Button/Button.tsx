import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<PropsWithChildren>;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
