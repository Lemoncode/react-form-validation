import * as React from 'react';
import { shallow } from 'enzyme';
import {
  createFormValidation,
  ValidationConstraints,
  Validators,
  FieldValidationResult,
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
          test: [{ validator: Validators.required }],
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
          test: [{ validator: Validators.required }],
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

  describe('onUpdateField', () => {
    it('should fail validation when call to to onUpdateField with empty value and required validator', done => {
      // Arrange
      const initialEntity = {
        test: 'init value',
      };

      const initialEntityError = {
        test: new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          test: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity, entityError, onUpdateField] = useValidation(
          validation,
          initialEntity,
          initialEntityError
        );
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test}
            />
            <span>{entityError.test.errorMessage}</span>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('input').simulate('change', {
        target: {
          value: '',
        },
      });

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should pass validation when call to to onUpdateField with some value and required validator', done => {
      // Arrange
      const initialEntity = {
        test: '',
      };

      const initialEntityError = {
        test: new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          test: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity, entityError, onUpdateField] = useValidation(
          validation,
          initialEntity,
          initialEntityError
        );
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test}
            />
            <span>{entityError.test.errorMessage}</span>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('input').simulate('change', {
        target: {
          value: 'updated value',
        },
      });

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should fail validation when call to to onUpdateField with empty value and required validator for complex entity', done => {
      // Arrange
      const initialEntity = {
        test: {
          value: 'init value',
        },
      };

      const initialEntityError = {
        'test.value': new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          'test.value': [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity, entityError, onUpdateField] = useValidation(
          validation,
          initialEntity,
          initialEntityError
        );
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test.value}
            />
            <span>{entityError['test.value'].errorMessage}</span>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('input').simulate('change', {
        target: {
          value: '',
        },
      });

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should pass validation when call to to onUpdateField with some value and required validator for complex entity', done => {
      // Arrange
      const initialEntity = {
        test: {
          value: 'init value',
        },
      };

      const initialEntityError = {
        'test.value': new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          'test.value': [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [entity, entityError, onUpdateField] = useValidation(
          validation,
          initialEntity,
          initialEntityError
        );
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test.value}
            />
            <span>{entityError['test.value'].errorMessage}</span>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('input').simulate('change', {
        target: {
          value: 'updated value',
        },
      });

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });
  });

  describe('onUpdateForm', () => {
    it('should fail validation when call to to onUpdateForm with empty value and required validator', done => {
      // Arrange
      const initialEntity = {
        test: '',
      };

      const initialEntityError = {
        test: new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          test: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [
          entity,
          entityError,
          onUpdateField,
          onUpdateForm,
        ] = useValidation(validation, initialEntity, initialEntityError);
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test}
            />
            <span>{entityError.test.errorMessage}</span>
            <button onClick={onUpdateForm}>Validate form</button>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('button').simulate('click');

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should pass validation when call to to onUpdateForm with some value and required validator', done => {
      // Arrange
      const initialEntity = {
        test: 'init value',
      };

      const initialEntityError = {
        test: new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          test: [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [
          entity,
          entityError,
          onUpdateField,
          onUpdateForm,
        ] = useValidation(validation, initialEntity, initialEntityError);
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test}
            />
            <span>{entityError.test.errorMessage}</span>
            <button onClick={onUpdateForm}>Validate form</button>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('button').simulate('click');

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should fail validation when call to to onUpdateForm with empty value and required validator for complex entity', done => {
      // Arrange
      const initialEntity = {
        test: {
          value: '',
        },
      };

      const initialEntityError = {
        'test.value': new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          'test.value': [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [
          entity,
          entityError,
          onUpdateField,
          onUpdateForm,
        ] = useValidation(validation, initialEntity, initialEntityError);
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test.value}
            />
            <span>{entityError['test.value'].errorMessage}</span>
            <button onClick={onUpdateForm}>Validate form</button>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('button').simulate('click');

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });

    it('should pass validation when call to to onUpdateForm with some value and required validator for complex entity', done => {
      // Arrange
      const initialEntity = {
        test: {
          value: 'init value',
        },
      };

      const initialEntityError = {
        'test.value': new FieldValidationResult(),
      };

      const constraints: ValidationConstraints = {
        fields: {
          'test.value': [{ validator: Validators.required }],
        },
      };
      const validation = createFormValidation(constraints);
      const TestComponent = () => {
        const [
          entity,
          entityError,
          onUpdateField,
          onUpdateForm,
        ] = useValidation(validation, initialEntity, initialEntityError);
        return (
          <>
            <input
              onChange={e => onUpdateField('test', e.target.value)}
              value={entity.test.value}
            />
            <span>{entityError['test.value'].errorMessage}</span>
            <button onClick={onUpdateForm}>Validate form</button>
          </>
        );
      };

      // Act
      const component = shallow(<TestComponent />);

      component.find('button').simulate('click');

      // Assert
      setImmediate(() => {
        expect(component).toMatchSnapshot();
        done();
      });
    });
  });
});
