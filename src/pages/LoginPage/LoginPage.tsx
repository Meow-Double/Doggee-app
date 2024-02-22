import { ChangeEvent, ReactNode, useState } from 'react';

import styles from './LoginPage.module.css';

import { Button } from 'common/buttons';
import { CheckBox, Input, PasswordInput } from 'common/fields';

const validateIsEmpty = (value: string): null | string => {
  if (!value) return 'field requierd';

  return null;
};
const validateUsernameForm = (value: string): string | null => validateIsEmpty(value);

const validatePasswordForm = (value: string): string | null => validateIsEmpty(value);

const loginFormValidateScheme = {
  username: validateUsernameForm,
  password: validatePasswordForm,
};

const validateLoginForm = (
  name: keyof typeof loginFormValidateScheme,
  value: string,
): string | null => {
  return loginFormValidateScheme[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}
export const LoginPage = (): ReactNode => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    notMyComputer: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    username: null,
    password: null,
  });

  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <div className={styles.header}>DOGGEE</div>
        <div className={styles.containerForm}>
          <div className={styles.inputContainer}>
            {' '}
            <Input
              value={formValues.username}
              label="username"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;

                setFormValues({ ...formValues, username });
                const error = validateLoginForm('username', username);

                setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username,
              })}
            />
          </div>
          <div className={styles.inputContainer}>
            {' '}
            <PasswordInput
              value={formValues.password}
              label="password"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;

                setFormValues({ ...formValues, password });
                const error = validateLoginForm('password', password);

                setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password,
              })}
            />
          </div>
          <div className={styles.inputContainer}>
            <CheckBox
              label="Text about"
              checked={formValues.notMyComputer}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const notMyComputer = event.target.checked;

                setFormValues((prev) => ({ ...prev, notMyComputer }));
              }}
            />
          </div>
          <div>
            {' '}
            <Button isLoading>Sign in</Button>
          </div>
        </div>
        <div className={styles.signUp}>Create new account</div>
      </div>
    </div>
  );
};
