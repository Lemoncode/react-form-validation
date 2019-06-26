import { FieldValidationResult } from 'lc-form-validation';

export interface UserError {
  name: FieldValidationResult;
  email: FieldValidationResult;
  'address.name': FieldValidationResult;
  'address.number': FieldValidationResult;
}

export const createEmptyUserError = (): UserError => ({
  name: new FieldValidationResult(),
  email: new FieldValidationResult(),
  'address.name': new FieldValidationResult(),
  'address.number': new FieldValidationResult(),
});
