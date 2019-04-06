import * as React from 'react';
import { useValidation } from '@lemoncode/react-form-validation';
import { Card, Form, Notification } from './components';
import { createEmptyLogin } from './model/login';
import { createEmptyLoginError } from './viewModel/login-error';
import { validation } from './validation';
import { loginRequest } from './api/login';

const FAILED_MESSAGE = 'Invalid login or password, please try again';
const SUCCESS_MESSAGE = 'Success login, congratulations';

export const App = () => {
  const [login, loginError, onUpdateField, onUpdateForm] = useValidation(
    validation,
    createEmptyLogin(),
    createEmptyLoginError()
  );
  const [open, setOpen] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const onLogin = () => {
    onUpdateForm().then(formValidationResult => {
      if (formValidationResult.succeeded) {
        loginRequest(login).then(isValid => {
          setIsValid(isValid);
          setOpen(true);
        });
      }
    });
  };

  return (
    <Card title="Login: (admin / test)">
      <Form
        login={login}
        loginError={loginError}
        onUpdateField={onUpdateField}
        onLogin={onLogin}
      />
      <Notification
        message={isValid ? SUCCESS_MESSAGE : FAILED_MESSAGE}
        open={open}
        onClose={() => setOpen(false)}
        success={isValid}
      />
    </Card>
  );
};
