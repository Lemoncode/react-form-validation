import * as React from 'react';
import { shallow } from 'enzyme';
import {
  createFormValidation,
  ValidationConstraints,
  Validators,
} from 'lc-form-validation';
import { useValidation } from './index';

describe('useValidation specs', () => {
  describe('entity', () => {
    it('should render component with initial entity value', () => {
      // Arrange
      const initialEntity = {
        test: 'test prop',
      };

      const constraints: ValidationConstraints = {
        fields: {
          name: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity] = useValidation(validation, initialEntity, null);
        return <div>{entity.test}</div>;
      };

      // Act
      const component = shallow(<TestComponent />);

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
  describe('entity error', () => {
    it('should render component with initial entity error value', () => {
      // Arrange
      const initialEntity = {
        test: 'test prop',
      };

      const initialEntityError = {
        testError: 'testError prop',
      };

      const constraints: ValidationConstraints = {
        fields: {
          name: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity, entityError] = useValidation(
          validation,
          initialEntity,
          initialEntityError
        );
        return <div>{entityError.testError}</div>;
      };

      // Act
      const component = shallow(<TestComponent />);

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
});
