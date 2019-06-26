import {
  createFormValidation,
  ValidationConstraints,
  Validators,
} from 'lc-form-validation';

const validationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    email: [
      { validator: Validators.email },
      { validator: Validators.required },
    ],
    'address.name': [{ validator: Validators.required }],
    'address.number': [{ validator: Validators.required }],
  },
};

export const validation = createFormValidation(validationConstraints);
