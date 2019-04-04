/**
 * React hook for validate lc-form-validation fields and form.
 *
 * @param validation: FormValidation instance from lc-form-validation
 * @param initEntity: initial value for entity to validate
 * @param initEntityError: initial value for errors
 */
import {
  FieldValidationResult,
  FormValidationResult,
} from 'lc-form-validation';

export function useValidation<EntityProps, EntityErrorProps>(
  validation: FormValidation,
  initEntity: EntityProps,
  initEntityError: EntityErrorProps
): [
  EntityProps,
  EntityErrorProps,
  (field: string, value) => Promise<FieldValidationResult>,
  () => Promise<FormValidationResult>
];
