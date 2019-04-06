import { doesLoginExist } from './api/login';
import { FieldValidationResult } from 'lc-form-validation';

export const loginExistValidator = (
  value: string
): Promise<FieldValidationResult> =>
  doesLoginExist(value).then(exists => ({
    type: 'GITHUB_LOGIN_EXIST',
    succeeded: !exists,
    errorMessage: exists && 'This user exists on Github',
  }));
