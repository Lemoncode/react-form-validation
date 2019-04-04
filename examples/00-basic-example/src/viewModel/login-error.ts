import { FieldValidationResult } from 'lc-form-validation';

export interface LoginError {
  name: FieldValidationResult;
  password: FieldValidationResult;
}

export const createEmptyLoginError = (): LoginError => ({
  name: new FieldValidationResult(),
  password: new FieldValidationResult(),
});
