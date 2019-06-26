import * as React from 'react';
import Button from '@material-ui/core/Button';
import { TextFieldForm } from './text-field-form';
import { User, UserError } from '../viewModel';

interface Props {
  user: User;
  userError: UserError;
  onUpdateField: (field, value) => void;
  onSave: () => void;
}

export const Form: React.StatelessComponent<Props> = ({
  user,
  userError,
  onUpdateField,
  onSave,
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
      value={user.name}
      onChange={onUpdateField}
      error={userError.name.errorMessage}
    />
    <TextFieldForm
      name="email"
      label="Email"
      value={user.email}
      onChange={onUpdateField}
      error={userError.email.errorMessage}
    />
    <TextFieldForm
      name="address.name"
      label="Address name"
      value={user.address.name}
      onChange={onUpdateField}
      error={userError['address.name'].errorMessage}
    />
    <TextFieldForm
      name="address.number"
      label="Address number"
      value={user.address.number}
      onChange={onUpdateField}
      error={userError['address.number'].errorMessage}
    />
    <Button variant="contained" color="primary" type="submit" onClick={onSave}>
      Save
    </Button>
  </div>
);
