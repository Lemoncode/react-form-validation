import * as React from 'react';
import { useValidation } from '@lemoncode/react-form-validation';
import { Card, Form } from './components';
import { createEmptyLogin } from './model/login';
import { createEmptyLoginError } from './viewModel/login-error';
import { validation } from './validation';
import { loginRequest } from './api/login';

export const App = () => {
  const [login, loginError, onUpdateField, onUpdateForm] = useValidation(
    validation,
    createEmptyLogin(),
    createEmptyLoginError()
  );

  const onLogin = () => {
    onUpdateForm().then(formValidationResult => {
      if (formValidationResult.succeeded) {
        loginRequest(login).then(isValid =>
          console.log(`Is valid login: ${isValid}`)
        );
      }
    });
  };

  return (
    <Card title="Login">
      <Form
        login={login}
        loginError={loginError}
        onUpdateField={onUpdateField}
        onLogin={onLogin}
      />
    </Card>
  );
};
