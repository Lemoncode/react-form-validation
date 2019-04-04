import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';

interface Props {
  name: string;
  label: string;
  onChange: any;
  value: string;
  error?: string;
  type?: string;
}

const onTextFieldChange = (field: string, onChange) => e => {
  onChange(field, e.target.value);
};

export const TextFieldForm: React.StatelessComponent<Props> = props => {
  const { name, label, onChange, value, error, type } = props;
  return (
    <>
      <TextField
        label={label}
        margin="normal"
        value={value}
        type={type}
        onChange={onTextFieldChange(name, onChange)}
      />
      <Typography variant="caption" color="error" gutterBottom={true}>
        {error}
      </Typography>
    </>
  );
};

TextFieldForm.defaultProps = {
  type: 'text',
};
