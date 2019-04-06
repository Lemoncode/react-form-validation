import {
  createFormValidation,
  ValidationConstraints,
  Validators,
} from 'lc-form-validation';
import { loginExistValidator } from './github-validator';

const validationConstraints: ValidationConstraints = {
  fields: {
    name: [
      { validator: Validators.required },
      { validator: loginExistValidator, eventsFilter: { onBlur: true } },
    ],
    password: [{ validator: Validators.required }],
  },
};

export const validation = createFormValidation(validationConstraints);
