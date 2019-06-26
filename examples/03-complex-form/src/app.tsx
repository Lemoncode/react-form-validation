import * as React from 'react';
import { useValidation } from '@lemoncode/react-form-validation';
import { Card, Form } from './components';
import { createEmptyUser, createEmptyUserError } from './viewModel';
import { validation } from './validation';

export const App = () => {
  const [user, userError, onUpdateField, onUpdateForm] = useValidation(
    validation,
    createEmptyUser(),
    createEmptyUserError()
  );

  const onSave = () => {
    onUpdateForm();
  };

  return (
    <Card title="User edit form">
      <Form
        user={user}
        userError={userError}
        onUpdateField={onUpdateField}
        onSave={onSave}
      />
    </Card>
  );
};
