/**
 * React hook for validate lc-form-validation fields and form.
 *
 * @param validation: FormValidation instance from lc-form-validation
 * @param initEntity: initial value for entity to validate
 * @param initEntityError: initial value for errors
 */

export function useValidation<EntityProps, EntityErrorProps>(
  validation: FormValidation,
  initEntity: EntityProps,
  initEntityError: EntityErrorProps
): [EntityProps, EntityErrorProps, OnUpdateFieldFn, OnUpdateFormFn];
