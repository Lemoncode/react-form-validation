import * as React from 'react';
import Button from '@material-ui/core/Button';
import { TextFieldForm } from './text-field-form';
import { Login } from '../model/login';
import { LoginError } from '../viewModel/login-error';

interface Props {
  login: Login;
  loginError: LoginError;
  onUpdateField: (field, value) => void;
  onLogin: () => void;
}

export const Form: React.StatelessComponent<Props> = ({
  login,
  loginError,
  onUpdateField,
  onLogin,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <TextFieldForm
      name="name"
      label="Name"
      value={login.name}
      onChange={onUpdateField}
      error={loginError.name.errorMessage}
    />
    <TextFieldForm
      name="password"
      label="Password"
      type="password"
      value={login.password}
      onChange={onUpdateField}
      error={loginError.password.errorMessage}
    />
    <Button variant="contained" color="primary" onClick={onLogin}>
      Login
    </Button>
  </div>
);
