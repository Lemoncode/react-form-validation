import {
  createFormValidation,
  ValidationConstraints,
  Validators,
} from 'lc-form-validation';

const validationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    password: [{ validator: Validators.required }],
  },
};

export const validation = createFormValidation(validationConstraints);
