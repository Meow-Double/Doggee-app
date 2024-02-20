import { ChangeEvent, useState } from 'react';

import styles from './LoginPage.module.css';

import { Button, Input } from 'common/fields';

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <div>Header</div>
        <div className={styles.containerForm}>
          <div className={styles.inputContainer}>
            {' '}
            <Input
              isError
              helperText="valid"
              value={formValues.username}
              placeholder="username"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, username: event.target.value })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            {' '}
            <Input
              value={formValues.password}
              placeholder="password"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, password: event.target.value })
              }
            />
          </div>
          <div>
            {' '}
            <Button>Sign in</Button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
