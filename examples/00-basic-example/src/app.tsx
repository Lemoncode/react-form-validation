import * as React from 'react';
import { useValidation } from '@lemoncode/react-form-validation';
import { Card, Form } from './components';
import { createEmptyLogin } from './model/login';
import { createEmptyLoginError } from './viewModel/login-error';
import { validation } from './validation';

export const App = () => {
  const [login, loginError, onUpdateField, onUpdateForm] = useValidation(
    validation,
    createEmptyLogin(),
    createEmptyLoginError()
  );

  const onLogin = () => {
    onUpdateForm();
  };

  return (
    <Card title="Login: (admin / test)">
      <Form
        login={login}
        loginError={loginError}
        onUpdateField={onUpdateField}
        onLogin={onLogin}
      />
    </Card>
  );
};
