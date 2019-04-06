import * as React from 'react';
import {
  FormValidation,
  FieldValidationResult,
  FormValidationResult,
  ValidationEventsFilter,
} from 'lc-form-validation';

type OnUpdateFieldFn = (
  field: string,
  value,
  eventsFilter?: ValidationEventsFilter
) => Promise<FieldValidationResult>;
type OnUpdateFormFn = () => Promise<FormValidationResult>;

export const useValidation = <EntityProps, EntityErrorProps>(
  validation: FormValidation,
  initEntity: EntityProps,
  initEntityError: EntityErrorProps
): [EntityProps, EntityErrorProps, OnUpdateFieldFn, OnUpdateFormFn] => {
  const [entity, setEntity] = React.useState(initEntity);
  const [entityError, setEntityError] = React.useState(initEntityError);

  const onUpdateField: OnUpdateFieldFn = async (
    field: string,
    value,
    eventsFilter?: ValidationEventsFilter
  ) => {
    setEntity({
      ...entity,
      [field]: value,
    });

    const fieldValidationResult = await validation.validateField(
      entity,
      field,
      value,
      eventsFilter
    );

    setEntityError({
      ...entityError,
      [field]: fieldValidationResult,
    });

    return fieldValidationResult;
  };

  const onUpdateForm: OnUpdateFormFn = async () => {
    const formValidationResult = await validation.validateForm(entity);

    setEntityError({
      ...entityError,
      ...formValidationResult.fieldErrors,
    });

    return formValidationResult;
  };

  return [entity, entityError, onUpdateField, onUpdateForm];
};
